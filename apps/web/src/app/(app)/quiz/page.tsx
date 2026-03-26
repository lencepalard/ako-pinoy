import Link from 'next/link'

export const metadata = { title: 'Quiz' }

const QUIZZES = [
  { id: 'greetings-1', title: 'Basic Greetings Quiz', icon: '👋', questions: 5, xp: 20, difficulty: 'Beginner', lesson: 'basic-greetings' },
  { id: 'culture-1', title: 'Filipino Culture Quiz', icon: '🌺', questions: 5, xp: 20, difficulty: 'Beginner', lesson: 'mano-po-tradition' },
  { id: 'food-1', title: 'Filipino Food Quiz', icon: '🍚', questions: 5, xp: 20, difficulty: 'Beginner', lesson: 'food-and-eating' },
  { id: 'daily-1', title: 'Daily Challenge', icon: '⭐', questions: 10, xp: 40, difficulty: 'Mixed', lesson: null },
]

export default function QuizPage(): React.JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          🧠 Pagsusulit — Quizzes
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          Test your Tagalog and Filipino knowledge!
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {QUIZZES.map((quiz) => (
          <div className="card" key={quiz.id}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{quiz.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.125rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              {quiz.title}
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{quiz.questions} questions</span>
              <span className="xp-badge" style={{ fontSize: '0.75rem' }}>+{quiz.xp} XP</span>
            </div>
            <Link href={`/quiz/${quiz.id}`} className="btn-press" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', width: '100%' }}>
              Simulan — Start
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
