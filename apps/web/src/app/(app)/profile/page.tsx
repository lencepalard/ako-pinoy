import { getSession } from '@/lib/auth'

export const metadata = { title: 'Profile' }

const BADGES = [
  { key: 'first_lesson', icon: '📚', title: 'First Step', desc: 'Completed your first lesson', earned: true },
  { key: 'first_correct', icon: '✅', title: 'Salamat!', desc: 'Got your first correct answer', earned: true },
  { key: 'streak_7', icon: '🔥', title: '7-Day Streak', desc: 'Learned 7 days in a row', earned: false },
  { key: 'palengke_pro', icon: '🛒', title: 'Palengke Pro', desc: 'Completed the Palengke scenario', earned: false },
  { key: 'first_mano_po', icon: '🙏', title: 'Mano Po', desc: 'Learned the Mano Po tradition', earned: false },
  { key: 'kumain_na', icon: '🍚', title: 'Kumain Na!', desc: 'Learned 20 food-related words', earned: false },
  { key: 'streak_30', icon: '🌟', title: '30-Day Streak', desc: '30 days in a row!', earned: false },
  { key: 'max_level', icon: '🇵🇭', title: 'Tunay na Pinoy', desc: 'Reached the highest level', earned: false },
]

export default async function ProfilePage(): Promise<React.JSX.Element> {
  const session = await getSession()

  return (
    <div style={{ maxWidth: '720px' }}>
      {/* Profile Header */}
      <div className="card" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, var(--color-ph-blue), var(--color-ocean))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            color: 'white',
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {session?.displayName?.[0] ?? '?'}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--color-ph-blue)', margin: '0 0 0.25rem' }}>
            {session?.displayName}
          </h1>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            {session?.email}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="level-chip">Baguhan</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'Total XP', value: '0', icon: '⚡', color: 'var(--color-ph-gold)' },
          { label: 'Day Streak', value: '0', icon: '🔥', color: 'var(--color-streak)' },
          { label: 'Lessons Done', value: '0', icon: '📚', color: 'var(--color-ph-blue)' },
          { label: 'Words Learned', value: '0', icon: '📖', color: '#22c55e' },
        ].map((stat) => (
          <div key={stat.label} className="card" style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.375rem' }}>{stat.icon}</div>
            <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '1.5rem', color: stat.color }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>
          🏅 Badges — Mga Medalya
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.875rem' }}>
          {BADGES.map((badge) => (
            <div
              key={badge.key}
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: `1.5px solid ${badge.earned ? 'var(--color-ph-gold)' : 'var(--color-border)'}`,
                background: badge.earned ? 'rgba(252,209,22,0.08)' : 'var(--color-muted)',
                textAlign: 'center',
                opacity: badge.earned ? 1 : 0.5,
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', filter: badge.earned ? 'none' : 'grayscale(1)' }}>
                {badge.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '0.8125rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>
                {badge.title}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                {badge.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Banner */}
      <div
        style={{
          padding: '1.5rem',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, rgba(0,56,168,0.06), rgba(252,209,22,0.12))',
          border: '1.5px solid rgba(252,209,22,0.3)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☕</div>
        <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-sepia)', marginBottom: '0.5rem' }}>
          Ako Pinoy is free forever.
        </h3>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
          If this app has helped you connect with Filipino culture, consider buying us a coffee ($3 or more). Salamat!
        </p>
        <a
          href="https://paypal.me/donateslikebuycoffee"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press btn-press-gold"
          style={{ display: 'inline-flex', textDecoration: 'none', fontSize: '0.9375rem' }}
        >
          ☕ Mag-donate — Support ($3+)
        </a>
      </div>
    </div>
  )
}
