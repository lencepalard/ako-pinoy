import Link from 'next/link'

export const metadata = { title: 'Culture' }

const ARTICLES = [
  {
    slug: 'bayanihan',
    title: 'Bayanihan — The Spirit of Community',
    excerpt: 'The Filipino tradition of communal unity and cooperation — neighbors helping neighbors carry a house to a new location.',
    category: 'Values',
    readTime: '3 min',
    icon: '🤝',
  },
  {
    slug: 'utang-na-loob',
    title: 'Utang na Loob — Debt of Gratitude',
    excerpt: 'One of the most important Filipino values — the deep sense of gratitude and obligation to those who have helped you.',
    category: 'Values',
    readTime: '4 min',
    icon: '💛',
  },
  {
    slug: 'hiya',
    title: 'Hiya — Shame and Social Harmony',
    excerpt: 'Understanding "Hiya" (shame/embarrassment) is key to understanding Filipino social behavior and indirect communication.',
    category: 'Values',
    readTime: '3 min',
    icon: '🙈',
  },
  {
    slug: 'pakikisama',
    title: 'Pakikisama — Getting Along Together',
    excerpt: 'The Filipino value of maintaining smooth relationships and going along with the group — even when you disagree.',
    category: 'Values',
    readTime: '3 min',
    icon: '🤗',
  },
  {
    slug: 'fiesta-culture',
    title: 'Filipino Fiesta Culture',
    excerpt: 'Every town has its own patron saint and fiesta — the most colorful, food-filled, joyful celebration in Filipino life.',
    category: 'Traditions',
    readTime: '5 min',
    icon: '🎉',
  },
  {
    slug: 'holy-week',
    title: 'Holy Week in the Philippines',
    excerpt: 'The Philippines is the most devout Catholic nation in Asia. Holy Week (Semana Santa) is observed with deep reverence.',
    category: 'Religion',
    readTime: '4 min',
    icon: '✝️',
  },
  {
    slug: 'filipino-food-culture',
    title: 'Filipino Food Culture',
    excerpt: 'Food is central to Filipino culture — from the humble tapsilog breakfast to lechon at celebrations. Understanding food is understanding Filipinos.',
    category: 'Food',
    readTime: '6 min',
    icon: '🍽️',
  },
  {
    slug: 'jeepney-icon',
    title: 'The Jeepney — Icon of the Philippines',
    excerpt: 'The colorful, art-decorated jeepney is more than just transport — it\'s a symbol of Filipino creativity, resilience, and culture.',
    category: 'Daily Life',
    readTime: '3 min',
    icon: '🚌',
  },
  {
    slug: 'filipino-family',
    title: 'The Filipino Family Structure',
    excerpt: 'Filipino families are the backbone of society. Multi-generational households, strong family ties, and "family first" is the Filipino way.',
    category: 'Family',
    readTime: '4 min',
    icon: '👨‍👩‍👧‍👦',
  },
]

const CAT_COLORS: Record<string, string> = {
  Values: '#0038a8',
  Traditions: '#f97316',
  Religion: '#7c3aed',
  Food: '#22c55e',
  'Daily Life': '#0ea5e9',
  Family: '#ec4899',
}

export default function CulturePage() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          🌺 Kultura — Filipino Culture
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          Deep dives into Filipino values, traditions, and daily life.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {ARTICLES.map((article) => (
          <Link key={article.slug} href={`/culture/${article.slug}`} style={{ textDecoration: 'none' }}>
            <div
              className="card"
              style={{
                height: '100%',
                cursor: 'pointer',
                borderLeft: `4px solid ${CAT_COLORS[article.category] ?? '#0038a8'}`,
              }}
            >
              <div style={{ display: 'flex', gap: '0.875rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>{article.icon}</span>
                <div>
                  <span
                    style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      background: `${CAT_COLORS[article.category] ?? '#0038a8'}15`,
                      color: CAT_COLORS[article.category] ?? '#0038a8',
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>
                    {article.readTime} read
                  </span>
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.0625rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {article.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
