import Link from 'next/link'

const ACTIONS = [
  { href: '/quiz', icon: '🧠', label: 'Daily Quiz', color: '#0038a8' },
  { href: '/vocabulary', icon: '📖', label: 'Review Words', color: '#22c55e' },
  { href: '/scenarios', icon: '🏙️', label: 'Practice Scenario', color: '#f97316' },
  { href: '/lessons', icon: '📚', label: 'New Lesson', color: '#7c3aed' },
]

export function QuickActions() {
  return (
    <div className="card" style={{ height: '100%' }}>
      <h3
        style={{
          fontFamily: 'var(--font-nunito)',
          fontWeight: 800,
          fontSize: '1rem',
          color: 'var(--color-text)',
          marginBottom: '1rem',
        }}
      >
        Quick Actions
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {ACTIONS.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-muted)',
              textDecoration: 'none',
              transition: 'background 120ms',
            }}
          >
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                background: action.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                flexShrink: 0,
              }}
            >
              {action.icon}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'var(--color-text)',
              }}
            >
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
