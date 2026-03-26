import { pgTable, uuid, text, integer, timestamp, jsonb, unique } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { users } from './users'

export const achievements = pgTable('achievements', {
  id: uuid('id').primaryKey().defaultRandom(),
  key: text('key').unique().notNull(),
  title: text('title').notNull(),
  description: text('description'),
  iconUrl: text('icon_url'),
  xpReward: integer('xp_reward').default(0).notNull(),
  condition: jsonb('condition'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const userAchievements = pgTable(
  'user_achievements',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    achievementId: uuid('achievement_id').notNull().references(() => achievements.id, { onDelete: 'cascade' }),
    earnedAt: timestamp('earned_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [unique().on(t.userId, t.achievementId)],
)

export const achievementsRelations = relations(achievements, ({ many }) => ({
  userAchievements: many(userAchievements),
}))

export const userAchievementsRelations = relations(userAchievements, ({ one }) => ({
  user: one(users, { fields: [userAchievements.userId], references: [users.id] }),
  achievement: one(achievements, { fields: [userAchievements.achievementId], references: [achievements.id] }),
}))

export type Achievement = typeof achievements.$inferSelect
export type UserAchievement = typeof userAchievements.$inferSelect
