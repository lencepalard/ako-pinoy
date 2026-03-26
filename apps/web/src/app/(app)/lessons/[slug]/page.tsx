import Link from 'next/link'

export const metadata = { title: 'Lesson' }

// Static lesson content — will be DB-driven after Drizzle setup
const LESSON_CONTENT: Record<string, {
  title: string
  tagalog: string
  icon: string
  xp: number
  difficulty: string
  intro: string
  vocabulary: Array<{ tagalog: string; english: string; pronunciation: string; example?: string }>
  cultural_note?: string
  tips: string[]
}> = {
  'basic-greetings': {
    title: 'Basic Greetings',
    tagalog: 'Mga Pagbati',
    icon: '👋',
    xp: 10,
    difficulty: 'Beginner',
    intro: 'In the Philippines, greetings are warm, respectful, and often include asking if someone has eaten. Filipinos greet everyone — even strangers — with a smile.',
    vocabulary: [
      { tagalog: 'Magandang umaga', english: 'Good morning', pronunciation: 'ma-gan-DANG u-MA-ga', example: 'Magandang umaga, Lola!' },
      { tagalog: 'Magandang hapon', english: 'Good afternoon', pronunciation: 'ma-gan-DANG HA-pon' },
      { tagalog: 'Magandang gabi', english: 'Good evening', pronunciation: 'ma-gan-DANG GA-bi' },
      { tagalog: 'Kumusta ka?', english: 'How are you?', pronunciation: 'ku-MUS-ta ka', example: 'Kumusta ka, pare?' },
      { tagalog: 'Mabuti naman', english: "I'm fine / Good", pronunciation: 'ma-BU-ti NA-man' },
      { tagalog: 'Salamat', english: 'Thank you', pronunciation: 'sa-LA-mat', example: 'Salamat po!' },
      { tagalog: 'Walang anuman', english: "You're welcome", pronunciation: 'wa-LANG a-NU-man' },
      { tagalog: 'Paalam', english: 'Goodbye', pronunciation: 'pa-a-LAM' },
      { tagalog: 'Kumain ka na ba?', english: 'Have you eaten?', pronunciation: 'ku-MA-in ka na ba', example: 'Kumain ka na ba, hijo?' },
    ],
    cultural_note: 'Asking "Kumain ka na ba?" (Have you eaten?) is one of the most common Filipino greetings. It reflects the Filipino culture\'s deep care for others\' well-being — food is central to Filipino hospitality. Always answer honestly and warmly!',
    tips: [
      'Add "po" to any sentence to show respect to elders — "Salamat po" is much more respectful than just "Salamat".',
      '"Maganda" means beautiful — so "Magandang umaga" literally means "Beautiful morning!"',
      'Filipinos often greet with "Kumusta?" even to strangers — don\'t be surprised!',
    ],
  },
  'mano-po-tradition': {
    title: 'Mano Po Tradition',
    tagalog: 'Tradisyon ng Mano Po',
    icon: '🙏',
    xp: 10,
    difficulty: 'Beginner',
    intro: 'Mano Po is one of the most beautiful Filipino customs — a gesture of showing deep respect to elders by gently pressing the back of their hand to your forehead.',
    vocabulary: [
      { tagalog: 'Mano po', english: 'Respectful greeting gesture for elders', pronunciation: 'MA-no po' },
      { tagalog: 'Lolo', english: 'Grandfather', pronunciation: 'LO-lo' },
      { tagalog: 'Lola', english: 'Grandmother', pronunciation: 'LO-la' },
      { tagalog: 'Tatay', english: 'Father', pronunciation: 'TA-tay' },
      { tagalog: 'Nanay', english: 'Mother', pronunciation: 'NA-nay' },
      { tagalog: 'Po', english: 'Respectful particle (elders)', pronunciation: 'po' },
      { tagalog: 'Opo', english: 'Yes (respectful)', pronunciation: 'O-po' },
      { tagalog: 'Hindi po', english: 'No (respectful)', pronunciation: 'HIN-di po' },
    ],
    cultural_note: 'Mano Po is performed by taking the elder\'s right hand and pressing the back of it lightly against your forehead. It\'s done when greeting parents, grandparents, aunts, uncles, and older relatives. Skipping mano po is considered very rude — it shows you have no "respeto" (respect).',
    tips: [
      'Always perform mano po when entering a relative\'s home or meeting elders.',
      '"Po" and "Opo" are the markers of respect. Use them in every sentence when speaking to elders.',
      'Foreigners who learn mano po are often praised and loved by Filipino families — it shows deep respect for the culture.',
    ],
  },
}

type Props = { params: Promise<{ slug: string }> }

export default async function LessonPage({ params }: Props) {
  const { slug } = await params
  const lesson = LESSON_CONTENT[slug]

  if (!lesson) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--color-ph-blue)' }}>
          Lesson not found
        </h2>
        <p style={{ color: 'var(--color-text-muted)' }}>This lesson is coming soon!</p>
        <Link href="/lessons" className="btn-press" style={{ display: 'inline-flex', marginTop: '1.5rem', textDecoration: 'none' }}>
          ← Back to Lessons
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Back */}
      <Link
        href="/lessons"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-text-muted)', textDecoration: 'none', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}
      >
        ← Back to Lessons
      </Link>

      {/* Header */}
      <div className="card" style={{ marginBottom: '1.5rem', background: 'linear-gradient(135deg, #0038a8, #1a52c4)', border: 'none', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <span style={{ fontSize: '3.5rem' }}>{lesson.icon}</span>
          <div>
            <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '1.75rem', margin: '0 0 0.25rem' }}>
              {lesson.title}
            </h1>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              {lesson.tagalog}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ padding: '0.2rem 0.625rem', background: 'rgba(255,255,255,0.2)', borderRadius: '9999px', fontSize: '0.75rem' }}>
                {lesson.difficulty}
              </span>
              <span className="xp-badge" style={{ fontSize: '0.75rem' }}>+{lesson.xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-text)', margin: 0 }}>
          {lesson.intro}
        </p>
      </div>

      {/* Vocabulary */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-ph-blue)', marginBottom: '1.25rem' }}>
          📖 Vocabulary — Bokabularyo
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {lesson.vocabulary.map((word) => (
            <div
              key={word.tagalog}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-muted)',
                border: '1.5px solid var(--color-border)',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-ph-blue)' }}>
                    {word.tagalog}
                  </span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                    /{word.pronunciation}/
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-plus-jakarta)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)', marginBottom: word.example ? '0.375rem' : 0 }}>
                  {word.english}
                </div>
                {word.example && (
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                    e.g. &ldquo;{word.example}&rdquo;
                  </div>
                )}
              </div>
              <button
                style={{
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--color-border)',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '1.125rem',
                  flexShrink: 0,
                }}
                title="Play pronunciation"
              >
                🔊
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Note */}
      {lesson.cultural_note && (
        <div
          className="card"
          style={{
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #fef9e7, #fff5e0)',
            border: '1.5px solid rgba(252,209,22,0.4)',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-sepia)', marginBottom: '0.75rem' }}>
            🌺 Cultural Note — Kaalamang Pangkultura
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--color-text)', margin: 0 }}>
            {lesson.cultural_note}
          </p>
        </div>
      )}

      {/* Tips */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-ph-blue)', marginBottom: '1rem' }}>
          💡 Tips — Mga Payo
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {lesson.tips.map((tip, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '0.875rem',
                padding: '0.875rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0,56,168,0.04)',
                border: '1.5px solid rgba(0,56,168,0.1)',
              }}
            >
              <span style={{ fontSize: '1.125rem', flexShrink: 0 }}>💡</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
                {tip}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link href={`/quiz?lesson=${slug}`} className="btn-press" style={{ textDecoration: 'none', fontSize: '1.0625rem' }}>
          🧠 Take the Quiz — +{lesson.xp} XP
        </Link>
        <Link href="/lessons" className="btn-press btn-ghost" style={{ textDecoration: 'none', fontSize: '1.0625rem' }}>
          Next Lesson →
        </Link>
      </div>
    </div>
  )
}
