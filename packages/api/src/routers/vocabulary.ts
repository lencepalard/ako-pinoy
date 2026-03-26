import { z } from 'zod'
import { eq, and, lte } from 'drizzle-orm'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { vocabularyReviews } from '@ako-pinoy/db'
import { fsrsSchedule } from '../lib/fsrs'

export const vocabularyRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ category: z.string().optional(), difficulty: z.string().optional(), limit: z.number().default(50) }))
    .query(async ({ ctx, input }) => {
      return ctx.db.query.vocabulary.findMany({
        where: (v, { eq, and }) => {
          const conditions = []
          if (input.category) conditions.push(eq(v.category, input.category))
          if (input.difficulty) conditions.push(eq(v.difficulty, input.difficulty as 'beginner'))
          return conditions.length ? and(...conditions) : undefined
        },
        limit: input.limit,
        orderBy: (v, { asc }) => [asc(v.category), asc(v.tagalog)],
      })
    }),

  dueReviews: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.query.vocabularyReviews.findMany({
      where: and(
        eq(vocabularyReviews.userId, ctx.userId!),
        lte(vocabularyReviews.dueDate, new Date()),
      ),
      with: { vocab: true },
      limit: 20,
    })
  }),

  submitReview: protectedProcedure
    .input(z.object({
      vocabId: z.string().uuid(),
      rating: z.enum(['again', 'hard', 'good', 'easy']),
    }))
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.query.vocabularyReviews.findFirst({
        where: and(
          eq(vocabularyReviews.userId, ctx.userId!),
          eq(vocabularyReviews.vocabId, input.vocabId),
        ),
      })

      const ratingMap = { again: 1, hard: 2, good: 3, easy: 4 } as const
      const next = fsrsSchedule(existing ?? null, ratingMap[input.rating])

      if (existing) {
        await ctx.db
          .update(vocabularyReviews)
          .set({ ...next, lastReview: new Date() })
          .where(eq(vocabularyReviews.id, existing.id))
      } else {
        await ctx.db.insert(vocabularyReviews).values({
          userId: ctx.userId!,
          vocabId: input.vocabId,
          ...next,
          lastReview: new Date(),
        })
      }

      return next
    }),
})
