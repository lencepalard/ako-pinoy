'use client'

const DAILY_WORDS = [
  { tagalog: 'Salamat', english: 'Thank you', pronunciation: 'sa-LA-mat', category: 'Greetings' },
  { tagalog: 'Magandang araw', english: 'Good day', pronunciation: 'ma-gan-DANG A-raw', category: 'Greetings' },
  { tagalog: 'Kumain ka na?', english: 'Have you eaten?', pronunciation: 'ku-MA-in ka na', category: 'Daily Life' },
  { tagalog: 'Mano po', english: 'Respectful greeting to elders', pronunciation: 'MA-no po', category: 'Culture' },
  { tagalog: 'Bahala na', english: 'Come what may / Leave it to fate', pronunciation: 'ba-HA-la na', category: 'Culture' },
  { tagalog: 'Mahal kita', english: 'I love you', pronunciation: 'ma-HAL ki-TA', category: 'Expressions' },
  { tagalog: 'Sige', english: 'Okay / Go ahead', pronunciation: 'SI-ge', category: 'Daily Life' },
]

export function DailyWord() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  const word = DAILY_WORDS[dayOfYear % DAILY_WORDS.length]!

  return (
    <div
      className="card"
      style={{
        background: 'linear-gradient(135deg, #0038a8 0%, #1a52c4 100%)',
        border: 'none',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          fontSize: '6rem',
          opacity: 0.1,
        }}
      >
        📖
      </div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.625rem',
            background: 'rgba(252,209,22,0.2)',
            border: '1px solid rgba(252,209,22,0.4)',
            borderRadius: '9999px',
            fontFamily: 'var(--font-inter)',
            fontSize: '0.75rem',
            color: '#fcd116',
            marginBottom: '0.75rem',
          }}
        >
          📅 Word of the Day · {word.category}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 900,
            fontSize: '1.75rem',
            color: 'white',
            marginBottom: '0.25rem',
          }}
        >
          {word.tagalog}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.8125rem',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '0.5rem',
            fontStyle: 'italic',
          }}
        >
          /{word.pronunciation}/
        </div>
        <div
          style={{
            fontFamily: 'var(--font-plus-jakarta)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          {word.english}
        </div>
      </div>
    </div>
  )
}
