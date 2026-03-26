import Link from 'next/link'

export const metadata = { title: 'Scenarios' }

const SCENARIOS = [
  {
    id: 'palengke',
    title: 'Sa Palengke',
    subtitle: 'At the Wet Market',
    icon: '🛒',
    desc: 'Practice bargaining, asking prices, and buying fresh produce at the Filipino wet market.',
    skills: ['Bargaining phrases', 'Numbers & prices', 'Food vocabulary'],
    xp: 20,
    difficulty: 'Intermediate',
    duration: '10 min',
  },
  {
    id: 'jeepney',
    title: 'Sakay ng Jeepney',
    subtitle: 'Riding the Jeepney',
    icon: '🚌',
    desc: 'Navigate the iconic Filipino jeepney — getting on, paying the fare, asking for your stop.',
    skills: ['Transport vocabulary', 'Directions', 'Paying & counting'],
    xp: 15,
    difficulty: 'Beginner',
    duration: '8 min',
  },
  {
    id: 'family-gathering',
    title: 'Pamilyang Pagtitipon',
    subtitle: 'Family Gathering',
    icon: '👨‍👩‍👧‍👦',
    desc: 'Join a Filipino family reunion — greet the elders with mano po, compliment the food, and join the karaoke.',
    skills: ['Respectful greetings', 'Family terms', 'Food compliments'],
    xp: 20,
    difficulty: 'Beginner',
    duration: '12 min',
  },
  {
    id: 'carinderia',
    title: 'Sa Carinderia',
    subtitle: 'At the Local Eatery',
    icon: '🍽️',
    desc: 'Order a meal at a local Filipino carinderia (turo-turo) — point and choose your viand.',
    skills: ['Food ordering', 'Polite requests', 'Paying the bill'],
    xp: 15,
    difficulty: 'Beginner',
    duration: '8 min',
  },
  {
    id: 'fiesta',
    title: 'Fiesta!',
    subtitle: 'Town Fiesta',
    icon: '🎉',
    desc: 'Experience a colorful Filipino town fiesta — patron saint parade, street food, and celebrations.',
    skills: ['Festival vocabulary', 'Expressions of joy', 'Religious terms'],
    xp: 25,
    difficulty: 'Intermediate',
    duration: '15 min',
  },
]

export default function ScenariosPage() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          🏙️ Mga Senaryo — Life Scenarios
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          Practice real Filipino daily life through interactive AI-powered conversations.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
        {SCENARIOS.map((scenario) => (
          <div key={scenario.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.875rem' }}>{scenario.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.125rem' }}>
              {scenario.title}
            </h3>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              {scenario.subtitle}
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
              {scenario.desc}
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                You&apos;ll practice:
              </div>
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {scenario.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{ padding: '0.2rem 0.5rem', background: 'var(--color-muted)', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="xp-badge" style={{ fontSize: '0.75rem' }}>+{scenario.xp} XP</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>⏱ {scenario.duration}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{scenario.difficulty}</span>
            </div>

            <Link
              href={`/scenarios/${scenario.id}`}
              className="btn-press"
              style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
            >
              Magsimula — Start Scenario
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
