'use client'

import { signOut } from '@/app/actions/auth'
import { useSidebarStore } from '@/store/sidebar'

export function AppHeader(): React.JSX.Element {
  const { toggle } = useSidebarStore()

  return (
    <header
      style={{
        height: '64px',
        borderBottom: '1.5px solid var(--color-border)',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        gap: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={toggle}
        aria-label="Open menu"
        className="hamburger-btn"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          color: 'var(--color-text)',
          padding: '0.25rem',
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        ☰
      </button>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
        <span className="streak-badge">🔥 0</span>
        <span className="xp-badge">⚡ 0 XP</span>

        <form action={signOut}>
          <button
            type="submit"
            style={{
              background: 'none',
              border: '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.375rem 0.875rem',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
            }}
          >
            Sign out
          </button>
        </form>
      </div>
    </header>
  )
}
