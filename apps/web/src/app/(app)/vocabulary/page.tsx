import Link from 'next/link'

export const metadata = { title: 'Vocabulary' }

const VOCABULARY = [
  // Greetings
  { tagalog: 'Magandang umaga', english: 'Good morning', pronunciation: 'ma-gan-DANG u-MA-ga', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Magandang hapon', english: 'Good afternoon', pronunciation: 'ma-gan-DANG HA-pon', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Magandang gabi', english: 'Good evening', pronunciation: 'ma-gan-DANG GA-bi', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Kumusta ka?', english: 'How are you?', pronunciation: 'ku-MUS-ta ka', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Salamat', english: 'Thank you', pronunciation: 'sa-LA-mat', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Walang anuman', english: "You're welcome", pronunciation: 'wa-LANG a-NU-man', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Paalam', english: 'Goodbye', pronunciation: 'pa-a-LAM', category: 'Greetings', difficulty: 'Beginner' },
  // Family
  { tagalog: 'Tatay', english: 'Father', pronunciation: 'TA-tay', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Nanay', english: 'Mother', pronunciation: 'NA-nay', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Kuya', english: 'Older brother (term of address)', pronunciation: 'KU-ya', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Ate', english: 'Older sister (term of address)', pronunciation: 'A-te', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Lolo', english: 'Grandfather', pronunciation: 'LO-lo', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Lola', english: 'Grandmother', pronunciation: 'LO-la', category: 'Family', difficulty: 'Beginner' },
  // Food
  { tagalog: 'Kanin', english: 'Cooked rice', pronunciation: 'KA-nin', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Adobo', english: 'Marinated meat dish', pronunciation: 'a-DO-bo', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Sinigang', english: 'Sour tamarind soup', pronunciation: 'si-ni-GANG', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Lechon', english: 'Roasted pig', pronunciation: 'LE-chon', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Tapsilog', english: 'Breakfast: tapa, sinangag, itlog', pronunciation: 'tap-si-LOG', category: 'Food', difficulty: 'Intermediate' },
  // Daily Life
  { tagalog: 'Bahay', english: 'House / Home', pronunciation: 'BA-hay', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Palengke', english: 'Wet market', pronunciation: 'pa-LENG-ke', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Jeepney', english: 'Iconic Filipino public transport', pronunciation: 'JEEP-ni', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Sige', english: 'Okay / Go ahead', pronunciation: 'SI-ge', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Puwede ba?', english: 'Is it possible? / May I?', pronunciation: 'pu-WE-de ba', category: 'Daily Life', difficulty: 'Beginner' },
  // Values / Culture
  { tagalog: 'Bayanihan', english: 'Communal unity / Working together', pronunciation: 'ba-ya-NI-han', category: 'Culture', difficulty: 'Intermediate' },
  { tagalog: 'Hiya', english: 'Shame / Social embarrassment', pronunciation: 'HI-ya', category: 'Culture', difficulty: 'Intermediate' },
  { tagalog: 'Pakikisama', english: 'Getting along / Group harmony', pronunciation: 'pa-ki-ki-SA-ma', category: 'Culture', difficulty: 'Intermediate' },
  { tagalog: 'Utang na loob', english: 'Debt of gratitude', pronunciation: 'U-tang na lo-OB', category: 'Culture', difficulty: 'Intermediate' },
  { tagalog: 'Bahala na', english: 'Come what may / Leave it to God', pronunciation: 'ba-HA-la na', category: 'Culture', difficulty: 'Intermediate' },
]

const CAT_COLORS: Record<string, string> = {
  Greetings: '#0038a8', Family: '#ec4899', Food: '#22c55e',
  'Daily Life': '#0ea5e9', Culture: '#f97316',
}

export default function VocabularyPage(): React.JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          📖 Bokabularyo — Vocabulary
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          {VOCABULARY.length} words · More added every week
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-inter)' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
              {['Tagalog', 'Pronunciation', 'English', 'Category', ''].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: '0.75rem 1rem',
                    textAlign: 'left',
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VOCABULARY.map((word) => (
              <tr
                key={word.tagalog}
                style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 120ms' }}
              >
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1rem', color: 'var(--color-ph-blue)' }}>
                    {word.tagalog}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  /{word.pronunciation}/
                </td>
                <td style={{ padding: '0.875rem 1rem', fontWeight: 500, color: 'var(--color-text)' }}>
                  {word.english}
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span
                    style={{
                      padding: '0.2rem 0.625rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: `${CAT_COLORS[word.category] ?? '#0038a8'}15`,
                      color: CAT_COLORS[word.category] ?? '#0038a8',
                    }}
                  >
                    {word.category}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.125rem', padding: '0.25rem' }}
                    title="Play audio"
                  >
                    🔊
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
