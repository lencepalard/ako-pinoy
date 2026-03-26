'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { signIn } from '@/app/actions/auth'

export default function SignInPage(): React.JSX.Element {
  const [state, action, pending] = useActionState(signIn, null)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0038a8 0%, #1a52c4 100%)',
        padding: '1.5rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem' }}>🇵🇭</div>
          <h1
            style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 900,
              fontSize: '1.75rem',
              color: 'white',
              margin: '0.5rem 0',
            }}
          >
            Ako Pinoy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
            Maligayang pagbabalik! Welcome back.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: 'white',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--color-ph-blue)',
              marginBottom: '1.5rem',
            }}
          >
            Sign in
          </h2>

          <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--color-text)' }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1.5px solid var(--color-border)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-inter)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--color-text)' }}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1.5px solid var(--color-border)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-inter)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {state?.error && (
              <p style={{ color: 'var(--color-ph-red)', fontSize: '0.875rem', margin: 0 }}>{state.error}</p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="btn-press"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              {pending ? 'Signing in…' : 'Sign in →'}
            </button>
          </form>

          <p style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            No account?{' '}
            <Link href="/sign-up" style={{ color: 'var(--color-ph-blue)', fontWeight: 700 }}>
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
