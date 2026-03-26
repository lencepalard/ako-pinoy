import Link from 'next/link'

const FEATURED_CULTURE = {
  title: 'Bayanihan — The Spirit of Community',
  excerpt:
    'Bayanihan is the Filipino tradition of communal unity and cooperation. It literally means working together as a community — most famously illustrated by neighbors helping to carry a family\'s house to a new location.',
  category: 'Filipino Values',
  readTime: '3 min read',
  href: '/culture/bayanihan',
}

export function CultureCard() {
  return (
    <div
      className="card"
      style={{
        height: '100%',
        background: 'linear-gradient(135deg, #fef9e7 0%, #fff5e0 100%)',
        border: '1.5px solid rgba(252,209,22,0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', opacity: 0.12 }}>
        🌺
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span
            style={{
              padding: '0.2rem 0.625rem',
              background: 'rgba(252,209,22,0.3)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.75rem',
              color: '#3d2b1f',
              fontWeight: 600,
            }}
          >
            🌺 {FEATURED_CULTURE.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {FEATURED_CULTURE.readTime}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 800,
            fontSize: '1.25rem',
            color: 'var(--color-sepia)',
            marginBottom: '0.625rem',
          }}
        >
          {FEATURED_CULTURE.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.9375rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}
        >
          {FEATURED_CULTURE.excerpt}
        </p>

        <Link
          href={FEATURED_CULTURE.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: 'var(--font-plus-jakarta)',
            fontWeight: 700,
            fontSize: '0.9375rem',
            color: 'var(--color-ph-blue)',
            textDecoration: 'none',
          }}
        >
          Basahin — Read more →
        </Link>
      </div>
    </div>
  )
}
