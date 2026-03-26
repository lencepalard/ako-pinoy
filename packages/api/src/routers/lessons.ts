import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { userProgress, users } from '@ako-pinoy/db'

export const lessonsRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        difficulty: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.query.lessons.findMany({
        where: (l, { eq, and }) => {
          const conditions = [eq(l.isPublished, true)]
          if (input.category) conditions.push(eq(l.category, input.category as 'language'))
          if (input.difficulty) conditions.push(eq(l.difficulty, input.difficulty))
          return conditions.length > 1 ? and(...conditions) : conditions[0]
        },
        orderBy: (l, { asc }) => [asc(l.orderIndex)],
      })
    }),

  bySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.query.lessons.findFirst({
        where: (l, { eq }) => eq(l.slug, input.slug),
        with: { quizQuestions: true },
      })
    }),

  complete: protectedProcedure
    .input(z.object({ lessonId: z.string().uuid(), score: z.number().int().min(0).max(100), xpEarned: z.number().int() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, ctx.userId!),
      })
      if (!user) throw new Error('User not found')

      await ctx.db
        .insert(userProgress)
        .values({
          userId: user.id,
          lessonId: input.lessonId,
          completed: true,
          score: input.score,
          xpEarned: input.xpEarned,
          completedAt: new Date(),
        })
        .onConflictDoUpdate({
          target: [userProgress.userId, userProgress.lessonId],
          set: { completed: true, score: input.score, xpEarned: input.xpEarned, completedAt: new Date() },
        })

      const newXP = user.xp + input.xpEarned
      await ctx.db.update(users).set({ xp: newXP, lastActiveAt: new Date() }).where(eq(users.id, user.id))

      return { success: true, xpEarned: input.xpEarned }
    }),

  myProgress: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.query.userProgress.findMany({
      where: eq(userProgress.userId, ctx.userId!),
      with: { lesson: true },
    })
  }),
})
