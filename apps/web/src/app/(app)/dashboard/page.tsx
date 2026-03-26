import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'
import { DailyStreak } from '@/components/dashboard/daily-streak'
import { XPProgress } from '@/components/dashboard/xp-progress'
import { DailyWord } from '@/components/dashboard/daily-word'
import { RecentLessons } from '@/components/dashboard/recent-lessons'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { CultureCard } from '@/components/dashboard/culture-card'

export const metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
  const user = await currentUser()
  const firstName = user?.firstName ?? 'Kaibigan'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Welcome Header */}
      <div>
        <h1
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 900,
            fontSize: '1.875rem',
            color: 'var(--color-ph-blue)',
            marginBottom: '0.25rem',
          }}
        >
          Magandang araw, {firstName}! 👋
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          Good day! Ready to learn something Filipino today?
        </p>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(80px, auto)',
          gap: '1rem',
        }}
      >
        {/* Streak — full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <DailyStreak />
        </div>

        {/* XP Progress — 7 cols */}
        <div style={{ gridColumn: 'span 7' }}>
          <XPProgress />
        </div>

        {/* Daily Word — 5 cols */}
        <div style={{ gridColumn: 'span 5' }}>
          <DailyWord />
        </div>

        {/* Quick Actions — 4 cols */}
        <div style={{ gridColumn: 'span 4' }}>
          <QuickActions />
        </div>

        {/* Culture Card — 8 cols */}
        <div style={{ gridColumn: 'span 8' }}>
          <CultureCard />
        </div>

        {/* Recent Lessons — full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <RecentLessons />
        </div>
      </div>
    </div>
  )
}
