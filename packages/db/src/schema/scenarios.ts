import { pgTable, uuid, text, integer, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core'

export const scenarios = pgTable('scenarios', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  setting: text('setting').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  dialogueConfig: jsonb('dialogue_config'),
  vocabularyIds: jsonb('vocabulary_ids').$type<string[]>(),
  xpReward: integer('xp_reward').default(15).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export type Scenario = typeof scenarios.$inferSelect
export type NewScenario = typeof scenarios.$inferInsert
