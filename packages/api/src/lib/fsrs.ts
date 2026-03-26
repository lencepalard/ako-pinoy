/**
 * FSRS (Free Spaced Repetition Scheduler) — simplified implementation
 * Based on the SM-2 enhanced algorithm used in Anki
 * Ratings: 1=Again, 2=Hard, 3=Good, 4=Easy
 */

type FSRSInput = {
  stability: number
  difficulty: number
  reps: number
  lapses: number
  state: 'new' | 'learning' | 'review' | 'relearning'
} | null

type FSRSOutput = {
  stability: number
  difficulty: number
  elapsedDays: number
  scheduledDays: number
  reps: number
  lapses: number
  state: 'new' | 'learning' | 'review' | 'relearning'
  dueDate: Date
}

// FSRS default parameters
const FSRS_PARAMS = {
  w: [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61],
  requestRetention: 0.9,
  maximumInterval: 36500,
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max)
}

function daysToDate(days: number): Date {
  const d = new Date()
  d.setDate(d.getDate() + Math.max(1, Math.round(days)))
  return d
}

export function fsrsSchedule(current: FSRSInput, rating: 1 | 2 | 3 | 4): FSRSOutput {
  // New card
  if (!current || current.state === 'new') {
    const stabilityMap: Record<number, number> = { 1: 0.4, 2: 0.6, 3: 2.4, 4: 5.8 }
    const stability = stabilityMap[rating] ?? 2.4
    const difficulty = clamp(
      FSRS_PARAMS.w[4]! - (rating - 3) * FSRS_PARAMS.w[5]!,
      1, 10,
    )
    const scheduledDays = rating === 4 ? 4 : rating === 3 ? 1 : 0

    return {
      stability,
      difficulty,
      elapsedDays: 0,
      scheduledDays,
      reps: 1,
      lapses: 0,
      state: rating >= 3 ? 'review' : 'learning',
      dueDate: daysToDate(scheduledDays),
    }
  }

  const { stability: s, difficulty: d, reps, lapses } = current

  if (rating === 1) {
    // Forgot — reschedule soon
    const newStability = s * FSRS_PARAMS.w[11]! * Math.exp(-FSRS_PARAMS.w[12]! * (lapses + 1))
    const newDifficulty = clamp(d + FSRS_PARAMS.w[6]!, 1, 10)
    return {
      stability: newStability,
      difficulty: newDifficulty,
      elapsedDays: 0,
      scheduledDays: 1,
      reps: reps + 1,
      lapses: lapses + 1,
      state: 'relearning',
      dueDate: daysToDate(1),
    }
  }

  // Good or Easy — calculate next interval
  const requestedRetention = FSRS_PARAMS.requestRetention
  const factor = FSRS_PARAMS.w[8]! * Math.exp((1 - requestedRetention) * FSRS_PARAMS.w[9]!)
  const multiplierMap: Record<number, number> = { 2: 0.8, 3: 1.0, 4: 1.3 }
  const multiplier = multiplierMap[rating] ?? 1.0

  const newStability = s * factor * multiplier
  const newDifficulty = clamp(d - (rating - 3) * FSRS_PARAMS.w[7]!, 1, 10)
  const scheduledDays = clamp(newStability, 1, FSRS_PARAMS.maximumInterval)

  return {
    stability: newStability,
    difficulty: newDifficulty,
    elapsedDays: 0,
    scheduledDays: Math.round(scheduledDays),
    reps: reps + 1,
    lapses,
    state: 'review',
    dueDate: daysToDate(scheduledDays),
  }
}
