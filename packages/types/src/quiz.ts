import { z } from 'zod'

export const QuizTypeSchema = z.enum([
  'multiple_choice',
  'fill_blank',
  'listening',
  'speaking',
  'image_recognition',
  'true_false',
])
export type QuizType = z.infer<typeof QuizTypeSchema>

export const QuizQuestionSchema = z.object({
  id: z.string().uuid(),
  lessonId: z.string().uuid().optional(),
  type: QuizTypeSchema,
  question: z.string(),
  options: z.array(z.string()).optional(),
  correctAnswer: z.string(),
  explanation: z.string().optional(),
  audioUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  createdAt: z.date(),
})
export type QuizQuestion = z.infer<typeof QuizQuestionSchema>

export const QuizAnswerSchema = z.object({
  questionId: z.string().uuid(),
  answer: z.string(),
  isCorrect: z.boolean(),
  timeSpentMs: z.number().int().optional(),
})
export type QuizAnswer = z.infer<typeof QuizAnswerSchema>

export const QuizSessionSchema = z.object({
  lessonId: z.string().uuid().optional(),
  answers: z.array(QuizAnswerSchema),
  score: z.number().int().min(0).max(100),
  xpEarned: z.number().int(),
  completedAt: z.date(),
})
export type QuizSession = z.infer<typeof QuizSessionSchema>
