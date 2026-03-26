import { pgTable, uuid, text, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const userLevelEnum = pgEnum('user_level', [
  'baguhan', 'natututo', 'bihasa', 'dalubhasa', 'tunay_na_pinoy',
])

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId: text('clerk_id').unique().notNull(),
  username: text('username').unique().notNull(),
  displayName: text('display_name'),
  avatarUrl: text('avatar_url'),
  nativeLang: text('native_lang').default('en').notNull(),
  xp: integer('xp').default(0).notNull(),
  level: userLevelEnum('level').default('baguhan').notNull(),
  streakDays: integer('streak_days').default(0).notNull(),
  lastActiveAt: timestamp('last_active_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
  progress: many(userProgress),
  achievements: many(userAchievements),
  reviews: many(vocabularyReviews),
  donations: many(donations),
}))

// Forward declarations for relations (imported from other schema files)
import { userProgress } from './progress'
import { userAchievements } from './achievements'
import { vocabularyReviews } from './vocabulary'
import { donations } from './donations'

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
