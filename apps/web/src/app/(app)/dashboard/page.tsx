import { getSession } from '@/lib/auth'
import { DailyStreak } from '@/components/dashboard/daily-streak'
import { XPProgress } from '@/components/dashboard/xp-progress'
import { DailyWord } from '@/components/dashboard/daily-word'
import { RecentLessons } from '@/components/dashboard/recent-lessons'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { CultureCard } from '@/components/dashboard/culture-card'

export const metadata = { title: 'Dashboard' }

export default async function DashboardPage(): Promise<React.JSX.Element> {
  const session = await getSession()
  const firstName = session?.displayName?.split(' ')[0] ?? 'Kaibigan'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Welcome Header */}
      <div>
        <h1
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
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

      {/* Bento Grid — responsive via CSS classes */}
      <div className="bento-grid">
        <div className="bento-full">
          <DailyStreak />
        </div>

        <div className="bento-7">
          <XPProgress />
        </div>

        <div className="bento-5">
          <DailyWord />
        </div>

        <div className="bento-4">
          <QuickActions />
        </div>

        <div className="bento-8">
          <CultureCard />
        </div>

        <div className="bento-full">
          <RecentLessons />
        </div>
      </div>
    </div>
  )
}
