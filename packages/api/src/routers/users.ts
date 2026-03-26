import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { users } from '@ako-pinoy/db'
import { getLevelFromXP } from '@ako-pinoy/types'

export const usersRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.query.users.findFirst({
      where: eq(users.id, ctx.userId!),
      with: {
        achievements: { with: { achievement: true } },
      },
    })
    return user ?? null
  }),

  upsert: protectedProcedure
    .input(
      z.object({
        displayName: z.string().max(50).optional(),
        avatarUrl: z.string().url().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [updated] = await ctx.db
        .update(users)
        .set({ displayName: input.displayName, avatarUrl: input.avatarUrl })
        .where(eq(users.id, ctx.userId!))
        .returning()
      return updated
    }),

  addXP: protectedProcedure
    .input(z.object({ amount: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, ctx.userId!),
      })
      if (!user) throw new Error('User not found')

      const newXP = user.xp + input.amount
      const newLevel = getLevelFromXP(newXP)

      const [updated] = await ctx.db
        .update(users)
        .set({ xp: newXP, level: newLevel, lastActiveAt: new Date() })
        .where(eq(users.id, ctx.userId!))
        .returning()

      return { xp: newXP, level: newLevel, leveledUp: newLevel !== user.level, user: updated }
    }),

  leaderboard: publicProcedure
    .input(z.object({ limit: z.number().int().max(50).default(20) }))
    .query(async ({ ctx, input }) => {
      return ctx.db.query.users.findMany({
        orderBy: (u, { desc }) => [desc(u.xp)],
        limit: input.limit,
        columns: { passwordHash: false },
      })
    }),
})
