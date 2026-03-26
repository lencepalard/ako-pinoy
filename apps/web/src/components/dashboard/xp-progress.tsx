'use client'

const LEVELS = [
  { name: 'Baguhan', tagalog: 'Newbie', xpRequired: 0, color: '#6b7280' },
  { name: 'Natututo', tagalog: 'Learning', xpRequired: 500, color: '#0ea5e9' },
  { name: 'Bihasa', tagalog: 'Skilled', xpRequired: 2000, color: '#0038a8' },
  { name: 'Dalubhasa', tagalog: 'Expert', xpRequired: 5000, color: '#7c3aed' },
  { name: 'Tunay na Pinoy', tagalog: 'True Filipino', xpRequired: 10000, color: '#fcd116' },
]

export function XPProgress(): React.JSX.Element {
  const currentXP = 0
  const currentLevel = LEVELS[0]!
  const nextLevel = LEVELS[1]!
  const progress = (currentXP / nextLevel.xpRequired) * 100

  return (
    <div className="card" style={{ height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div>
          <span className="level-chip">{currentLevel.name}</span>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
            {currentLevel.tagalog}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="xp-badge" style={{ fontSize: '1rem' }}>⚡ {currentXP} XP</span>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
            {nextLevel.xpRequired - currentXP} to {nextLevel.name}
          </p>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {LEVELS.map((level, i) => (
          <div
            key={level.name}
            style={{
              flex: 1,
              minWidth: '80px',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              background: i === 0 ? 'rgba(0,56,168,0.08)' : 'var(--color-muted)',
              textAlign: 'center',
              border: i === 0 ? '1.5px solid var(--color-ph-blue)' : '1.5px solid transparent',
            }}
          >
            <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '0.75rem', color: level.color }}>
              {level.name}
            </div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
              {level.xpRequired === 0 ? 'Start' : `${level.xpRequired} XP`}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
