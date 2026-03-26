'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebarStore } from '@/store/sidebar'

const NAV_ITEMS = [
  { href: '/dashboard', icon: '🏠', label: 'Dashboard', tagalog: 'Tahanan' },
  { href: '/lessons', icon: '📚', label: 'Lessons', tagalog: 'Mga Aralin' },
  { href: '/vocabulary', icon: '📖', label: 'Vocabulary', tagalog: 'Bokabularyo' },
  { href: '/quiz', icon: '🧠', label: 'Quiz', tagalog: 'Pagsusulit' },
  { href: '/scenarios', icon: '🏙️', label: 'Scenarios', tagalog: 'Mga Senaryo' },
  { href: '/culture', icon: '🌺', label: 'Culture', tagalog: 'Kultura' },
  { href: '/leaderboard', icon: '🏆', label: 'Leaderboard', tagalog: 'Ranggo' },
  { href: '/profile', icon: '👤', label: 'Profile', tagalog: 'Aking Pahina' },
]

export function AppSidebar(): React.JSX.Element {
  const pathname = usePathname()
  const { isOpen, close } = useSidebarStore()

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        className={`app-sidebar ${isOpen ? 'open' : ''}`}
        style={{
          width: '240px',
          minHeight: '100vh',
          background: 'white',
          borderRight: '1.5px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1rem',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', padding: '0 0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🇵🇭</span>
            <span
              style={{
                fontFamily: 'var(--font-nunito)',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: 'var(--color-ph-blue)',
                letterSpacing: '-0.025em',
              }}
            >
              Ako Pinoy
            </span>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={close}
            aria-label="Close menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: 'var(--color-text-muted)',
              padding: '0.25rem',
            }}
            className="hamburger-btn"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  background: isActive ? 'rgba(0, 56, 168, 0.08)' : 'transparent',
                  transition: 'background 120ms',
                }}
              >
                <span style={{ fontSize: '1.25rem', width: '1.5rem', textAlign: 'center' }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.9375rem',
                      color: isActive ? 'var(--color-ph-blue)' : 'var(--color-text)',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {item.tagalog}
                  </div>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Support Banner */}
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, rgba(0,56,168,0.06), rgba(252,209,22,0.1))',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid rgba(252,209,22,0.3)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>☕</div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: '0 0 0.5rem' }}>
            Ako Pinoy is free forever. Support with $3 or more?
          </p>
          <a
            href="https://paypal.me/donateslikebuycoffee"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.375rem 0.875rem',
              background: 'var(--color-ph-gold)',
              color: 'var(--color-sepia)',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-nunito)',
              fontWeight: 800,
              fontSize: '0.8125rem',
              textDecoration: 'none',
            }}
          >
            Salamat! Donate
          </a>
        </div>
      </aside>
    </>
  )
}
