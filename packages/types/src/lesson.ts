import { z } from 'zod'

export const LessonCategorySchema = z.enum(['language', 'culture', 'scenario', 'food', 'values', 'baybayin'])
export type LessonCategory = z.infer<typeof LessonCategorySchema>

export const LessonSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  category: LessonCategorySchema,
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  xpReward: z.number().int().default(10),
  orderIndex: z.number().int(),
  content: z.any(), // JSON content blocks
  thumbnailUrl: z.string().url().optional(),
  isPublished: z.boolean().default(false),
  createdAt: z.date(),
})
export type Lesson = z.infer<typeof LessonSchema>

export const UserProgressSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  lessonId: z.string().uuid(),
  completed: z.boolean().default(false),
  score: z.number().int().min(0).max(100).optional(),
  xpEarned: z.number().int().default(0),
  completedAt: z.date().optional(),
})
export type UserProgress = z.infer<typeof UserProgressSchema>
