import { pgTable, uuid, text, timestamp, real, integer, pgEnum } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { users } from './users'

export const difficultyEnum = pgEnum('difficulty', ['beginner', 'intermediate', 'advanced'])
export const fsrsStateEnum = pgEnum('fsrs_state', ['new', 'learning', 'review', 'relearning'])

export const vocabulary = pgTable('vocabulary', {
  id: uuid('id').primaryKey().defaultRandom(),
  tagalog: text('tagalog').notNull(),
  english: text('english').notNull(),
  pronunciation: text('pronunciation'),
  audioUrl: text('audio_url'),
  partOfSpeech: text('part_of_speech'),
  category: text('category').notNull(),
  difficulty: difficultyEnum('difficulty').notNull().default('beginner'),
  exampleTagalog: text('example_tagalog'),
  exampleEnglish: text('example_english'),
  baybayin: text('baybayin'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// FSRS spaced repetition per user per word
export const vocabularyReviews = pgTable('vocabulary_reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  vocabId: uuid('vocab_id').notNull().references(() => vocabulary.id, { onDelete: 'cascade' }),
  dueDate: timestamp('due_date', { withTimezone: true }).notNull(),
  stability: real('stability').default(0).notNull(),
  difficulty: real('difficulty').default(0.3).notNull(),
  elapsedDays: integer('elapsed_days').default(0).notNull(),
  scheduledDays: integer('scheduled_days').default(0).notNull(),
  reps: integer('reps').default(0).notNull(),
  lapses: integer('lapses').default(0).notNull(),
  state: fsrsStateEnum('state').default('new').notNull(),
  lastReview: timestamp('last_review', { withTimezone: true }),
})

export const vocabularyRelations = relations(vocabulary, ({ many }) => ({
  reviews: many(vocabularyReviews),
}))

export const vocabularyReviewsRelations = relations(vocabularyReviews, ({ one }) => ({
  user: one(users, { fields: [vocabularyReviews.userId], references: [users.id] }),
  vocab: one(vocabulary, { fields: [vocabularyReviews.vocabId], references: [vocabulary.id] }),
}))

export type Vocabulary = typeof vocabulary.$inferSelect
export type NewVocabulary = typeof vocabulary.$inferInsert
export type VocabularyReview = typeof vocabularyReviews.$inferSelect
