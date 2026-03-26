import { z } from 'zod'

export const XP_REWARDS = {
  LESSON_COMPLETE: 10,
  QUIZ_PERFECT: 20,
  QUIZ_ANSWER_CORRECT: 4,
  STREAK_7_DAYS: 50,
  STREAK_30_DAYS: 200,
  SCENARIO_COMPLETE: 15,
  VOCAB_REVIEW: 2,
  SPEAKING_EXERCISE: 8,
  COMMUNITY_UPVOTE: 5,
  DAILY_CHALLENGE: 40,
} as const

export const ACHIEVEMENT_KEYS = [
  'first_lesson',
  'first_correct',
  'streak_7',
  'streak_30',
  'first_mano_po',
  'palengke_pro',
  'kumain_na',
  'baybayin_basic',
  'max_level',
  'supporter',
] as const

export const AchievementKeySchema = z.enum(ACHIEVEMENT_KEYS)
export type AchievementKey = z.infer<typeof AchievementKeySchema>

export const ACHIEVEMENTS: Record<AchievementKey, {
  title: string
  description: string
  icon: string
  xpReward: number
}> = {
  first_lesson: { title: 'First Step', description: 'Completed your first lesson', icon: '📚', xpReward: 5 },
  first_correct: { title: 'Salamat!', description: 'Got your first correct quiz answer', icon: '✅', xpReward: 5 },
  streak_7: { title: '7-Day Streak', description: 'Learned 7 days in a row', icon: '🔥', xpReward: 50 },
  streak_30: { title: '30-Day Streak', description: 'Learned 30 days in a row', icon: '🌟', xpReward: 200 },
  first_mano_po: { title: 'Mano Po', description: 'Learned the Mano Po tradition', icon: '🙏', xpReward: 10 },
  palengke_pro: { title: 'Palengke Pro', description: 'Completed the Palengke scenario', icon: '🛒', xpReward: 20 },
  kumain_na: { title: 'Kumain Na!', description: 'Learned 20 food-related words', icon: '🍚', xpReward: 15 },
  baybayin_basic: { title: 'Baybayin Basic', description: 'Wrote your name in Baybayin', icon: '✍️', xpReward: 25 },
  max_level: { title: 'Tunay na Pinoy', description: 'Reached the highest level', icon: '🇵🇭', xpReward: 500 },
  supporter: { title: 'Supporter', description: 'Supported Ako Pinoy', icon: '☕', xpReward: 0 },
}
