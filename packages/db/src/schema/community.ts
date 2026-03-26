import { pgTable, uuid, text, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { users } from './users'

export const postCategoryEnum = pgEnum('post_category', ['question', 'story', 'tip', 'correction'])
export const reportStatusEnum = pgEnum('report_status', ['pending', 'resolved', 'dismissed'])

export const communityPosts = pgTable('community_posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: text('title'),
  body: text('body').notNull(),
  category: postCategoryEnum('category').notNull().default('question'),
  upvotes: integer('upvotes').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const contentReports = pgTable('content_reports', {
  id: uuid('id').primaryKey().defaultRandom(),
  reporterId: uuid('reporter_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  contentType: text('content_type').notNull(),
  contentId: uuid('content_id').notNull(),
  reason: text('reason').notNull(),
  status: reportStatusEnum('status').default('pending').notNull(),
  reviewedBy: uuid('reviewed_by').references(() => users.id),
  reviewedAt: timestamp('reviewed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const communityPostsRelations = relations(communityPosts, ({ one }) => ({
  author: one(users, { fields: [communityPosts.userId], references: [users.id] }),
}))

export type CommunityPost = typeof communityPosts.$inferSelect
export type ContentReport = typeof contentReports.$inferSelect
