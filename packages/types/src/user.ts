import { z } from 'zod'

export const UserLevelSchema = z.enum([
  'baguhan',
  'natututo',
  'bihasa',
  'dalubhasa',
  'tunay_na_pinoy',
])
export type UserLevel = z.infer<typeof UserLevelSchema>

export const USER_LEVELS: Record<UserLevel, { name: string; tagalog: string; xpRequired: number; color: string }> = {
  baguhan: { name: 'Baguhan', tagalog: 'Newbie', xpRequired: 0, color: '#6b7280' },
  natututo: { name: 'Natututo', tagalog: 'Learning', xpRequired: 500, color: '#0ea5e9' },
  bihasa: { name: 'Bihasa', tagalog: 'Skilled', xpRequired: 2000, color: '#0038a8' },
  dalubhasa: { name: 'Dalubhasa', tagalog: 'Expert', xpRequired: 5000, color: '#7c3aed' },
  tunay_na_pinoy: { name: 'Tunay na Pinoy', tagalog: 'True Filipino', xpRequired: 10000, color: '#fcd116' },
}

export function getLevelFromXP(xp: number): UserLevel {
  if (xp >= 10000) return 'tunay_na_pinoy'
  if (xp >= 5000) return 'dalubhasa'
  if (xp >= 2000) return 'bihasa'
  if (xp >= 500) return 'natututo'
  return 'baguhan'
}

export const UserSchema = z.object({
  id: z.string().uuid(),
  clerkId: z.string(),
  username: z.string().min(3).max(30),
  displayName: z.string().max(50).optional(),
  avatarUrl: z.string().url().optional(),
  nativeLang: z.string().default('en'),
  xp: z.number().int().min(0).default(0),
  level: UserLevelSchema.default('baguhan'),
  streakDays: z.number().int().min(0).default(0),
  lastActiveAt: z.date().optional(),
  createdAt: z.date(),
})
export type User = z.infer<typeof UserSchema>
