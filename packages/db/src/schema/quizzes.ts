import { pgTable, uuid, text, timestamp, jsonb, pgEnum } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { lessons } from './lessons'

export const quizTypeEnum = pgEnum('quiz_type', [
  'multiple_choice', 'fill_blank', 'listening', 'speaking', 'image_recognition', 'true_false',
])

export const quizQuestions = pgTable('quiz_questions', {
  id: uuid('id').primaryKey().defaultRandom(),
  lessonId: uuid('lesson_id').references(() => lessons.id, { onDelete: 'set null' }),
  type: quizTypeEnum('type').notNull().default('multiple_choice'),
  question: text('question').notNull(),
  options: jsonb('options').$type<string[]>(),
  correctAnswer: text('correct_answer').notNull(),
  explanation: text('explanation'),
  audioUrl: text('audio_url'),
  imageUrl: text('image_url'),
  difficulty: text('difficulty').notNull().default('beginner'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const quizQuestionsRelations = relations(quizQuestions, ({ one }) => ({
  lesson: one(lessons, { fields: [quizQuestions.lessonId], references: [lessons.id] }),
}))

export type QuizQuestion = typeof quizQuestions.$inferSelect
export type NewQuizQuestion = typeof quizQuestions.$inferInsert
