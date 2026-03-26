import { pgTable, uuid, text, integer, boolean, timestamp, jsonb, pgEnum } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const lessonCategoryEnum = pgEnum('lesson_category', [
  'language', 'culture', 'scenario', 'food', 'values', 'baybayin',
])

export const lessons = pgTable('lessons', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  slug: text('slug').unique().notNull(),
  description: text('description'),
  category: lessonCategoryEnum('category').notNull(),
  difficulty: text('difficulty').notNull().default('beginner'),
  xpReward: integer('xp_reward').default(10).notNull(),
  orderIndex: integer('order_index').notNull().default(0),
  content: jsonb('content'),
  thumbnailUrl: text('thumbnail_url'),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const lessonsRelations = relations(lessons, ({ many }) => ({
  quizQuestions: many(quizQuestions),
  progress: many(userProgress),
}))

// Forward declarations
import { quizQuestions } from './quizzes'
import { userProgress } from './progress'

export type Lesson = typeof lessons.$inferSelect
export type NewLesson = typeof lessons.$inferInsert
