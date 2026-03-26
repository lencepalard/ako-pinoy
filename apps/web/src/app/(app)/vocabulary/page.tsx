'use client'

import { useState } from 'react'

const VOCABULARY = [
  { tagalog: 'Magandang umaga', english: 'Good morning', pronunciation: 'ma-gan-DANG u-MA-ga', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Magandang hapon', english: 'Good afternoon', pronunciation: 'ma-gan-DANG HA-pon', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Magandang gabi', english: 'Good evening', pronunciation: 'ma-gan-DANG GA-bi', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Kumusta ka?', english: 'How are you?', pronunciation: 'ku-MUS-ta ka', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Salamat', english: 'Thank you', pronunciation: 'sa-LA-mat', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Walang anuman', english: "You're welcome", pronunciation: 'wa-LANG a-NU-man', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Paalam', english: 'Goodbye', pronunciation: 'pa-a-LAM', category: 'Greetings', difficulty: 'Beginner' },
  { tagalog: 'Tatay', english: 'Father', pronunciation: 'TA-tay', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Nanay', english: 'Mother', pronunciation: 'NA-nay', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Kuya', english: 'Older brother', pronunciation: 'KU-ya', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Ate', english: 'Older sister', pronunciation: 'A-te', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Lolo', english: 'Grandfather', pronunciation: 'LO-lo', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Lola', english: 'Grandmother', pronunciation: 'LO-la', category: 'Family', difficulty: 'Beginner' },
  { tagalog: 'Kanin', english: 'Cooked rice', pronunciation: 'KA-nin', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Adobo', english: 'Marinated meat dish', pronunciation: 'a-DO-bo', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Sinigang', english: 'Sour tamarind soup', pronunciation: 'si-ni-GANG', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Lechon', english: 'Roasted pig', pronunciation: 'LE-chon', category: 'Food', difficulty: 'Beginner' },
  { tagalog: 'Tapsilog', english: 'Breakfast: tapa, sinangag, itlog', pronunciation: 'tap-si-LOG', category: 'Food', difficulty: 'Intermediate' },
  { tagalog: 'Bahay', english: 'House / Home', pronunciation: 'BA-hay', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Palengke', english: 'Wet market', pronunciation: 'pa-LENG-ke', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Jeepney', english: 'Iconic Filipino public transport', pronunciation: 'JEEP-ni', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Sige', english: 'Okay / Go ahead', pronunciation: 'SI-ge', category: 'Daily Life', difficulty: 'Beginner' },
  { tagalog: 'Puwede ba?', english: 'Is it possible? / May I?', pronunciation: 'pu-WE-de ba', category: 'Daily Life', difficulty: 'Beginner' },
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
const CATEGORIES = ['All', 'Greetings', 'Family', 'Food', 'Daily Life', 'Culture']

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'fil-PH'
  u.rate = 0.85
  window.speechSynthesis.speak(u)
}

export default function VocabularyPage(): React.JSX.Element {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = VOCABULARY.filter((w) => {
    const q = search.toLowerCase()
    const matchSearch = !q || w.tagalog.toLowerCase().includes(q) || w.english.toLowerCase().includes(q)
    const matchCat = cat === 'All' || w.category === cat
    return matchSearch && matchCat
  })

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          📖 Bokabularyo — Vocabulary
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          {VOCABULARY.length} words · Click 🔊 to hear pronunciation
        </p>
      </div>

      {/* Search + Filter */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search Tagalog or English..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1, minWidth: '200px', padding: '0.625rem 1rem',
            borderRadius: '0.75rem', border: '1.5px solid var(--color-border)',
            fontSize: '0.9375rem', fontFamily: 'var(--font-inter)', outline: 'none',
          }}
        />
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                padding: '0.375rem 0.875rem', borderRadius: '9999px', cursor: 'pointer',
                border: '1.5px solid var(--color-border)', fontSize: '0.8125rem', fontWeight: 600,
                fontFamily: 'var(--font-plus-jakarta)',
                background: cat === c ? (CAT_COLORS[c] ?? 'var(--color-ph-blue)') : 'white',
                color: cat === c ? 'white' : 'var(--color-text)',
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', marginBottom: '0.75rem', fontFamily: 'var(--font-inter)' }}>
        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Table */}
      <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--color-border)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-inter)' }}>
          <thead>
            <tr style={{ background: 'var(--color-muted)' }}>
              {['Tagalog', 'Pronunciation', 'English', 'Category', ''].map((h) => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--font-plus-jakarta)', fontWeight: 700, fontSize: '0.8125rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((word) => (
              <tr key={word.tagalog} style={{ borderTop: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1rem', color: 'var(--color-ph-blue)' }}>
                    {word.tagalog}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
                  /{word.pronunciation}/
                </td>
                <td style={{ padding: '0.875rem 1rem', fontWeight: 500, color: 'var(--color-text)' }}>
                  {word.english}
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span style={{ padding: '0.2rem 0.625rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, background: `${CAT_COLORS[word.category] ?? '#0038a8'}15`, color: CAT_COLORS[word.category] ?? '#0038a8', whiteSpace: 'nowrap' }}>
                    {word.category}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <button
                    onClick={() => speak(word.tagalog)}
                    title={`Hear "${word.tagalog}"`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', padding: '0.25rem', borderRadius: '0.5rem', transition: 'background 120ms' }}
                  >
                    🔊
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                  No words found. Try a different search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
