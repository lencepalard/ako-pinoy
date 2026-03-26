import { pgTable, uuid, text, timestamp, numeric } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { users } from './users'

export const donations = pgTable('donations', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  amountUsd: numeric('amount_usd', { precision: 6, scale: 2 }).notNull(),
  currency: text('currency').default('USD').notNull(),
  platform: text('platform'),
  externalRef: text('external_ref'),
  message: text('message'),
  donatedAt: timestamp('donated_at', { withTimezone: true }).defaultNow().notNull(),
})

export const donationsRelations = relations(donations, ({ one }) => ({
  user: one(users, { fields: [donations.userId], references: [users.id] }),
}))

export type Donation = typeof donations.$inferSelect
export type NewDonation = typeof donations.$inferInsert
