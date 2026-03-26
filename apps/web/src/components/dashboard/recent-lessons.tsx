import Link from 'next/link'

const SEED_LESSONS = [
  { slug: 'basic-greetings', title: 'Basic Greetings', tagalog: 'Mga Pagbati', icon: '👋', category: 'Language', xp: 10, difficulty: 'Beginner' },
  { slug: 'filipino-family', title: 'Filipino Family', tagalog: 'Pamilyang Pilipino', icon: '👨‍👩‍👧‍👦', category: 'Culture', xp: 10, difficulty: 'Beginner' },
  { slug: 'numbers-counting', title: 'Numbers & Counting', tagalog: 'Mga Numero', icon: '🔢', category: 'Language', xp: 10, difficulty: 'Beginner' },
  { slug: 'food-and-eating', title: 'Food & Eating', tagalog: 'Pagkain', icon: '🍚', category: 'Culture', xp: 15, difficulty: 'Beginner' },
  { slug: 'mano-po-tradition', title: 'Mano Po Tradition', tagalog: 'Tradisyon ng Mano Po', icon: '🙏', category: 'Culture', xp: 10, difficulty: 'Beginner' },
  { slug: 'jeepney-ride', title: 'Riding the Jeepney', tagalog: 'Jeepney', icon: '🚌', category: 'Scenario', xp: 15, difficulty: 'Beginner' },
]

const DIFF_COLORS: Record<string, string> = {
  Beginner: '#22c55e',
  Intermediate: '#f97316',
  Advanced: '#ce1126',
}

const CAT_COLORS: Record<string, string> = {
  Language: '#0038a8',
  Culture: '#f97316',
  Scenario: '#7c3aed',
}

export function RecentLessons() {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 800,
            fontSize: '1.125rem',
            color: 'var(--color-text)',
            margin: 0,
          }}
        >
          📚 Start Learning — Magsimula na!
        </h3>
        <Link
          href="/lessons"
          style={{
            fontFamily: 'var(--font-plus-jakarta)',
            fontWeight: 600,
            fontSize: '0.875rem',
            color: 'var(--color-ph-blue)',
            textDecoration: 'none',
          }}
        >
          View all →
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {SEED_LESSONS.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--color-border)',
              textDecoration: 'none',
              background: 'white',
              transition: 'border-color 120ms, box-shadow 120ms',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: `${CAT_COLORS[lesson.category]}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}
            >
              {lesson.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                  marginBottom: '0.125rem',
                }}
              >
                {lesson.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '0.375rem',
                }}
              >
                {lesson.tagalog}
              </div>
              <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
                <span
                  style={{
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    background: `${DIFF_COLORS[lesson.difficulty]}18`,
                    color: DIFF_COLORS[lesson.difficulty],
                  }}
                >
                  {lesson.difficulty}
                </span>
                <span
                  style={{
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    background: `${CAT_COLORS[lesson.category]}18`,
                    color: CAT_COLORS[lesson.category],
                  }}
                >
                  {lesson.category}
                </span>
                <span className="xp-badge" style={{ fontSize: '0.6875rem', padding: '0.125rem 0.375rem' }}>
                  +{lesson.xp} XP
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
