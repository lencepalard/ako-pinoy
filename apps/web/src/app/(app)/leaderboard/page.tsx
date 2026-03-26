export const metadata = { title: 'Leaderboard' }

const MOCK_LEADERS = [
  { rank: 1, name: 'Maria Santos', xp: 4820, level: 'Dalubhasa', streak: 42, country: '🇵🇭' },
  { rank: 2, name: 'John Mitchell', xp: 3940, level: 'Bihasa', streak: 31, country: '🇺🇸' },
  { rank: 3, name: 'Yuki Tanaka', xp: 3210, level: 'Bihasa', streak: 28, country: '🇯🇵' },
  { rank: 4, name: 'Anna Weber', xp: 2750, level: 'Natututo', streak: 15, country: '🇩🇪' },
  { rank: 5, name: 'Carlos Reyes', xp: 2100, level: 'Natututo', streak: 12, country: '🇲🇽' },
  { rank: 6, name: 'Sophie Martin', xp: 1850, level: 'Natututo', streak: 8, country: '🇫🇷' },
  { rank: 7, name: 'David Kim', xp: 1200, level: 'Natututo', streak: 6, country: '🇰🇷' },
  { rank: 8, name: 'Emma Johnson', xp: 980, level: 'Baguhan', streak: 5, country: '🇬🇧' },
]

const RANK_BADGES: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' }

export default function LeaderboardPage(): React.JSX.Element {
  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          🏆 Ranggo — Leaderboard
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          Weekly rankings reset every Monday. Earn XP to climb!
        </p>
      </div>

      {/* Top 3 podium */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[MOCK_LEADERS[1], MOCK_LEADERS[0], MOCK_LEADERS[2]].map((leader, i) => {
          if (!leader) return null
          const heights = ['120px', '150px', '100px']
          const bg = [
            'linear-gradient(135deg, #c0c0c0, #e8e8e8)',
            'linear-gradient(135deg, #fcd116, #f59e0b)',
            'linear-gradient(135deg, #cd7f32, #e8a56b)',
          ]
          return (
            <div
              key={leader.rank}
              style={{
                textAlign: 'center',
                padding: '1.25rem 1rem',
                borderRadius: 'var(--radius-lg)',
                background: bg[i],
                minHeight: heights[i],
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {RANK_BADGES[leader.rank]}
              </div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '0.9375rem', color: '#1a1208' }}>
                {leader.country} {leader.name}
              </div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '1.125rem', color: '#3d2b1f' }}>
                {leader.xp.toLocaleString()} XP
              </div>
            </div>
          )
        })}
      </div>

      {/* Full list */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {MOCK_LEADERS.map((leader, i) => (
          <div
            key={leader.rank}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              borderBottom: i < MOCK_LEADERS.length - 1 ? '1px solid var(--color-border)' : 'none',
              background: leader.rank <= 3 ? 'rgba(252,209,22,0.04)' : 'white',
            }}
          >
            <div style={{ width: '36px', textAlign: 'center', fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: leader.rank <= 3 ? 'var(--color-ph-gold-dark)' : 'var(--color-text-muted)' }}>
              {RANK_BADGES[leader.rank] ?? `#${leader.rank}`}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-plus-jakarta)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                {leader.country} {leader.name}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.2rem' }}>
                <span className="level-chip" style={{ fontSize: '0.6875rem', padding: '0.125rem 0.5rem' }}>
                  {leader.level}
                </span>
                <span className="streak-badge" style={{ fontSize: '0.6875rem', padding: '0.125rem 0.5rem' }}>
                  🔥 {leader.streak}
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="xp-badge" style={{ fontSize: '0.875rem' }}>
                ⚡ {leader.xp.toLocaleString()} XP
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
