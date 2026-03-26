'use client'

import { UserButton } from '@clerk/nextjs'

export function AppHeader() {
  return (
    <header
      style={{
        height: '64px',
        borderBottom: '1.5px solid var(--color-border)',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 1.5rem',
        gap: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Streak + XP quick stats */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span className="streak-badge">🔥 0</span>
        <span className="xp-badge">⚡ 0 XP</span>
      </div>

      <UserButton
        appearance={{
          variables: { colorPrimary: '#0038a8' },
        }}
      />
    </header>
  )
}
