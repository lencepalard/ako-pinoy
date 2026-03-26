import Link from 'next/link'

export const metadata = { title: 'Lessons' }

const LESSONS = [
  // Beginner
  { slug: 'basic-greetings', title: 'Basic Greetings', tagalog: 'Mga Pagbati', icon: '👋', category: 'Language', xp: 10, difficulty: 'Beginner', desc: 'Learn how to say hello, goodbye, and common daily greetings in Filipino.' },
  { slug: 'mano-po-tradition', title: 'Mano Po Tradition', tagalog: 'Tradisyon ng Mano Po', icon: '🙏', category: 'Culture', xp: 10, difficulty: 'Beginner', desc: 'The deeply respectful Filipino tradition of showing reverence to elders.' },
  { slug: 'numbers-counting', title: 'Numbers & Counting', tagalog: 'Mga Numero', icon: '🔢', category: 'Language', xp: 10, difficulty: 'Beginner', desc: 'Count from 1 to 100 in Tagalog — essential for markets and daily life.' },
  { slug: 'filipino-family', title: 'Filipino Family', tagalog: 'Pamilyang Pilipino', icon: '👨‍👩‍👧‍👦', category: 'Culture', xp: 10, difficulty: 'Beginner', desc: 'Understanding Filipino family values, roles, and why family is everything.' },
  { slug: 'food-and-eating', title: 'Food & Eating', tagalog: 'Pagkain at Kainan', icon: '🍚', category: 'Culture', xp: 15, difficulty: 'Beginner', desc: 'Explore Filipino cuisine — from sinangag to adobo — and how to eat like a local.' },
  { slug: 'colors-tagalog', title: 'Colors in Tagalog', tagalog: 'Mga Kulay', icon: '🎨', category: 'Language', xp: 10, difficulty: 'Beginner', desc: 'Learn all the colors in Tagalog — pula (red), asul (blue), dilaw (yellow) and more.' },
  // Intermediate
  { slug: 'jeepney-ride', title: 'Riding the Jeepney', tagalog: 'Jeepney', icon: '🚌', category: 'Scenario', xp: 15, difficulty: 'Intermediate', desc: 'Navigate the iconic Filipino jeepney — how to ride, pay, and ask for your stop.' },
  { slug: 'palengke-market', title: 'At the Palengke', tagalog: 'Sa Palengke', icon: '🛒', category: 'Scenario', xp: 20, difficulty: 'Intermediate', desc: 'Shop at the wet market — bargaining, asking prices, and choosing fresh produce.' },
  { slug: 'bayanihan-spirit', title: 'Bayanihan Spirit', tagalog: 'Diwa ng Bayanihan', icon: '🤝', category: 'Culture', xp: 15, difficulty: 'Intermediate', desc: 'The Filipino spirit of communal unity — one of the most beautiful cultural values.' },
  { slug: 'tagalog-verbs', title: 'Tagalog Verb System', tagalog: 'Mga Pandiwa', icon: '⚙️', category: 'Language', xp: 20, difficulty: 'Intermediate', desc: 'Understand the unique Filipino verb focus system — actor, object, locative focus.' },
  { slug: 'filipino-fiesta', title: 'Filipino Fiesta', tagalog: 'Fiesta', icon: '🎉', category: 'Culture', xp: 15, difficulty: 'Intermediate', desc: 'Experience the joy of Filipino town fiestas — food, music, and community.' },
  { slug: 'utang-na-loob', title: 'Utang na Loob', tagalog: 'Utang na Loob', icon: '💛', category: 'Culture', xp: 15, difficulty: 'Intermediate', desc: 'The Filipino concept of debt of gratitude — a core social value.' },
  // Advanced
  { slug: 'baybayin-script', title: 'Baybayin Script', tagalog: 'Baybayin', icon: '✍️', category: 'Language', xp: 25, difficulty: 'Advanced', desc: 'Learn to read and write the ancient Filipino Baybayin script.' },
  { slug: 'regional-languages', title: 'Regional Languages', tagalog: 'Mga Wikang Panlalawigan', icon: '🗺️', category: 'Culture', xp: 20, difficulty: 'Advanced', desc: 'Cebuano, Ilocano, Kapampangan — the Philippines is more than just Tagalog.' },
  { slug: 'tagalog-slang', title: 'Filipino Slang & Taglish', tagalog: 'Balbal at Taglish', icon: '😄', category: 'Language', xp: 20, difficulty: 'Advanced', desc: 'Sound natural with Filipino slang, Taglish, and everyday expressions.' },
]

const CATEGORIES = ['All', 'Language', 'Culture', 'Scenario']
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced']

const DIFF_COLORS: Record<string, string> = { Beginner: '#22c55e', Intermediate: '#f97316', Advanced: '#ce1126' }
const CAT_COLORS: Record<string, string> = { Language: '#0038a8', Culture: '#f97316', Scenario: '#7c3aed' }

export default function LessonsPage(): React.JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 900,
            fontSize: '2rem',
            color: 'var(--color-ph-blue)',
            marginBottom: '0.5rem',
          }}
        >
          📚 Mga Aralin — Lessons
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          {LESSONS.length} lessons covering language, culture, and real-life Filipino scenarios.
        </p>
      </div>

      {/* Filters — static for now, will be client-side with state */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            style={{
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              border: '1.5px solid var(--color-border)',
              background: cat === 'All' ? 'var(--color-ph-blue)' : 'white',
              color: cat === 'All' ? 'white' : 'var(--color-text)',
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
        <div style={{ width: '1px', background: 'var(--color-border)', margin: '0 0.25rem' }} />
        {DIFFICULTIES.map((diff) => (
          <button
            key={diff}
            style={{
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              border: `1.5px solid ${diff === 'All' ? 'var(--color-border)' : (DIFF_COLORS[diff] ?? 'var(--color-border)')}`,
              background: 'white',
              color: diff === 'All' ? 'var(--color-text)' : (DIFF_COLORS[diff] ?? 'inherit'),
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            {diff}
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1rem',
        }}
      >
        {LESSONS.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <div
              className="card"
              style={{ height: '100%', cursor: 'pointer', transition: 'box-shadow 150ms' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.875rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    background: `${CAT_COLORS[lesson.category] ?? '#0038a8'}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    flexShrink: 0,
                  }}
                >
                  {lesson.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-nunito)',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      marginBottom: '0.125rem',
                    }}
                  >
                    {lesson.title}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                    {lesson.tagalog}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}
              >
                {lesson.desc}
              </p>

              <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span
                  style={{
                    padding: '0.2rem 0.625rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: `${DIFF_COLORS[lesson.difficulty] ?? '#22c55e'}18`,
                    color: DIFF_COLORS[lesson.difficulty] ?? '#22c55e',
                  }}
                >
                  {lesson.difficulty}
                </span>
                <span
                  style={{
                    padding: '0.2rem 0.625rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: `${CAT_COLORS[lesson.category] ?? '#0038a8'}18`,
                    color: CAT_COLORS[lesson.category] ?? '#0038a8',
                  }}
                >
                  {lesson.category}
                </span>
                <span className="xp-badge" style={{ fontSize: '0.75rem' }}>+{lesson.xp} XP</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
