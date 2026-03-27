import Link from 'next/link'

export default function HomePage(): React.JSX.Element {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0038a8 0%, #1a52c4 50%, #0ea5e9 100%)' }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link href="https://ako-pinoy-web.vercel.app/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '2rem' }}>🇵🇭</span>
          <span
            style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: 'white',
              letterSpacing: '-0.025em',
            }}
          >
            Ako Pinoy
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            style={{
              color: 'white',
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '0.5rem 1rem',
            }}
          >
            Sign In
          </Link>
          <Link href="/sign-up" className="btn-press btn-press-gold" style={{ textDecoration: 'none' }}>
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(252, 209, 22, 0.2)',
            border: '1px solid rgba(252, 209, 22, 0.4)',
            color: '#fcd116',
            fontFamily: 'var(--font-plus-jakarta)',
            fontWeight: 700,
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
          }}
        >
          🌺 100% Free Forever · No Paywalls
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          Don&apos;t just learn Filipino.{' '}
          <span style={{ color: '#fcd116' }}>Become Pinoy.</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          Learn Tagalog, understand Filipino culture, and experience daily life in the Philippines
          through immersive lessons, real scenarios, and AI-powered guidance.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/sign-up"
            className="btn-press btn-press-gold"
            style={{ textDecoration: 'none', fontSize: '1.125rem', padding: '1rem 2rem' }}
          >
            Magsimula Na! — Start Now
          </Link>
          <Link
            href="#features"
            className="btn-press btn-ghost"
            style={{
              textDecoration: 'none',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              color: 'white',
              borderColor: 'rgba(255,255,255,0.4)',
            }}
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <div
        style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          padding: '1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          {[
            { value: '1,000+', label: 'Tagalog Words' },
            { value: '50+', label: 'Cultural Lessons' },
            { value: '5', label: 'Life Scenarios' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 900,
                  fontSize: '2rem',
                  color: '#fcd116',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.875rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" style={{ background: '#fffdf5', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#0038a8',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Everything you need to go full Pinoy
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: '📚',
                title: 'Learn Tagalog',
                desc: 'Vocabulary, grammar, pronunciation — with native audio and spaced repetition so you never forget.',
              },
              {
                icon: '🏙️',
                title: 'Real-Life Scenarios',
                desc: 'Practice at the palengke, ride a jeepney, attend a fiesta — interactive AI-powered simulations.',
              },
              {
                icon: '🧠',
                title: 'Adaptive Quizzes',
                desc: 'Multiple choice, fill-in-the-blank, speaking challenges — tailored to your level.',
              },
              {
                icon: '🌺',
                title: 'Deep Culture',
                desc: 'Understand bayanihan, utang na loob, mano po — the values that make Filipinos unique.',
              },
              {
                icon: '🔥',
                title: 'Gamification',
                desc: 'XP, streaks, badges, leaderboards — stay motivated every single day.',
              },
              {
                icon: '🤖',
                title: 'AI Conversation',
                desc: 'Chat with Filipino AI characters. Practice ordering food, bargaining, greeting elders.',
              },
            ].map((f) => (
              <div key={f.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: '#0038a8',
                    marginBottom: '0.5rem',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: '#6b5d45', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0038a8, #ce1126)',
          padding: '5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 900,
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: 'white',
            marginBottom: '1rem',
          }}
        >
          Handa ka na ba? Are you ready?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.125rem' }}>
          Join learners who are connecting with Filipino culture.
        </p>
        <Link
          href="/sign-up"
          className="btn-press btn-press-gold"
          style={{ textDecoration: 'none', fontSize: '1.125rem', padding: '1rem 2.5rem' }}
        >
          Simulan na — It&apos;s Free!
        </Link>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem', fontSize: '0.875rem' }}>
          No credit card. No subscription. Libre forever.
        </p>
      </section>
    </main>
  )
}
