import { z } from 'zod'

export const VocabCategorySchema = z.enum([
  'greetings', 'family', 'food', 'numbers', 'colors',
  'daily_life', 'culture', 'transport', 'nature', 'body',
  'emotions', 'work', 'school', 'religion', 'slang',
])
export type VocabCategory = z.infer<typeof VocabCategorySchema>

export const DifficultySchema = z.enum(['beginner', 'intermediate', 'advanced'])
export type Difficulty = z.infer<typeof DifficultySchema>

export const VocabularySchema = z.object({
  id: z.string().uuid(),
  tagalog: z.string(),
  english: z.string(),
  pronunciation: z.string().optional(),
  audioUrl: z.string().url().optional(),
  partOfSpeech: z.string().optional(),
  category: VocabCategorySchema,
  difficulty: DifficultySchema,
  exampleTagalog: z.string().optional(),
  exampleEnglish: z.string().optional(),
  baybayin: z.string().optional(),
  createdAt: z.date(),
})
export type Vocabulary = z.infer<typeof VocabularySchema>

// FSRS spaced repetition state
export const FSRSStateSchema = z.enum(['new', 'learning', 'review', 'relearning'])
export type FSRSState = z.infer<typeof FSRSStateSchema>

export const VocabReviewSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  vocabId: z.string().uuid(),
  dueDate: z.date(),
  stability: z.number().default(0),
  difficulty: z.number().min(0).max(1).default(0.3),
  elapsedDays: z.number().int().default(0),
  scheduledDays: z.number().int().default(0),
  reps: z.number().int().default(0),
  lapses: z.number().int().default(0),
  state: FSRSStateSchema.default('new'),
  lastReview: z.date().optional(),
})
export type VocabReview = z.infer<typeof VocabReviewSchema>

export const FSRSRatingSchema = z.enum(['again', 'hard', 'good', 'easy'])
export type FSRSRating = z.infer<typeof FSRSRatingSchema>
