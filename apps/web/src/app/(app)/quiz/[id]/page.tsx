'use client'

import { useState } from 'react'
import Link from 'next/link'

const QUIZ_QUESTIONS = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'What does "Salamat" mean in English?',
    options: ['Good morning', 'Thank you', 'Goodbye', 'How are you?'],
    correct: 1,
    explanation: '"Salamat" means "Thank you" in Filipino. Add "po" to make it more respectful: "Salamat po!"',
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'Which phrase would you use to greet someone in the morning?',
    options: ['Magandang gabi', 'Paalam', 'Magandang umaga', 'Kumusta ka?'],
    correct: 2,
    explanation: '"Magandang umaga" means "Good morning." "Maganda" means beautiful, so it literally means "Beautiful morning!"',
  },
  {
    id: 3,
    type: 'multiple_choice',
    question: 'What is "Mano Po" in Filipino culture?',
    options: [
      'A type of Filipino food',
      'A traditional dance',
      'A respectful gesture where you press an elder\'s hand to your forehead',
      'A greeting between friends',
    ],
    correct: 2,
    explanation: 'Mano Po is a deeply respectful Filipino gesture — you gently take an elder\'s hand and press its back to your forehead as a sign of respect.',
  },
  {
    id: 4,
    type: 'multiple_choice',
    question: 'How do you say "How are you?" in Tagalog?',
    options: ['Salamat', 'Kumusta ka?', 'Paalam', 'Mabuti naman'],
    correct: 1,
    explanation: '"Kumusta ka?" means "How are you?" in Tagalog. A common answer is "Mabuti naman" (I\'m fine).',
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'What does asking "Kumain ka na ba?" show in Filipino culture?',
    options: [
      'That you want food',
      'That you\'re checking if someone is hungry as a form of care',
      'That you\'re angry',
      'That it\'s time to sleep',
    ],
    correct: 1,
    explanation: '"Kumain ka na ba?" (Have you eaten?) is a common Filipino greeting that shows genuine care for the other person\'s well-being. It reflects Filipino hospitality.',
  },
]

export default function QuizPage(): React.JSX.Element {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])

  const question = QUIZ_QUESTIONS[currentQ]!
  const isCorrect = selected === question.correct
  const progress = ((currentQ) / QUIZ_QUESTIONS.length) * 100

  function handleCheck() {
    if (selected === null) return
    setChecked(true)
    if (isCorrect) setScore((s) => s + 1)
  }

  function handleNext() {
    setAnswers((a) => [...a, isCorrect])
    if (currentQ + 1 >= QUIZ_QUESTIONS.length) {
      setFinished(true)
    } else {
      setCurrentQ((q) => q + 1)
      setSelected(null)
      setChecked(false)
    }
  }

  if (finished) {
    const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100)
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          {pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}
        </div>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          {pct >= 80 ? 'Napakahusay! Excellent!' : pct >= 60 ? 'Magaling! Good job!' : 'Kaya mo! Keep trying!'}
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          You scored {score} out of {QUIZ_QUESTIONS.length} ({pct}%)
        </p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            {answers.map((correct, i) => (
              <span key={i} style={{ fontSize: '1.5rem' }}>{correct ? '✅' : '❌'}</span>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: '#22c55e' }}>{score}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Correct</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: '#ce1126' }}>{QUIZ_QUESTIONS.length - score}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Incorrect</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-gold)' }}>+{score * 4} XP</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Earned</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-press"
            onClick={() => { setCurrentQ(0); setSelected(null); setChecked(false); setScore(0); setFinished(false); setAnswers([]) }}
          >
            🔄 Try Again
          </button>
          <Link href="/lessons" className="btn-press btn-ghost" style={{ textDecoration: 'none' }}>
            📚 More Lessons
          </Link>
          <Link href="/dashboard" className="btn-press btn-ghost" style={{ textDecoration: 'none' }}>
            🏠 Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      {/* Progress */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            Question {currentQ + 1} of {QUIZ_QUESTIONS.length}
          </span>
          <span className="xp-badge">+{(currentQ) * 4} XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question Card */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ padding: '0.2rem 0.625rem', background: 'rgba(0,56,168,0.08)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-ph-blue)' }}>
            Multiple Choice
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1.375rem', color: 'var(--color-text)', lineHeight: 1.4, margin: '0.75rem 0 0' }}>
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {question.options.map((option, i) => {
          let optionClass = 'quiz-option'
          if (checked) {
            if (i === question.correct) optionClass += ' correct'
            else if (i === selected && !isCorrect) optionClass += ' incorrect'
          } else if (i === selected) {
            optionClass += ' selected'
          }

          return (
            <button
              key={i}
              className={optionClass}
              onClick={() => !checked && setSelected(i)}
              disabled={checked}
              style={{ textAlign: 'left' }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '2px solid currentColor',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  flexShrink: 0,
                  opacity: 0.7,
                }}
              >
                {['A', 'B', 'C', 'D'][i]}
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {checked && (
        <div
          className="card"
          style={{
            marginBottom: '1.5rem',
            background: isCorrect ? '#f0fdf4' : '#fff5f5',
            border: `1.5px solid ${isCorrect ? '#22c55e' : '#ce1126'}`,
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.5rem' }}>{isCorrect ? '✅' : '❌'}</span>
            <div>
              <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: '1rem', color: isCorrect ? '#166534' : '#991b1b', marginBottom: '0.375rem' }}>
                {isCorrect ? 'Tama! Correct!' : 'Mali. Incorrect.'}
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: isCorrect ? '#166534' : '#991b1b', margin: 0, lineHeight: 1.6 }}>
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Button */}
      {!checked ? (
        <button
          className="btn-press"
          onClick={handleCheck}
          disabled={selected === null}
          style={{ width: '100%', opacity: selected === null ? 0.5 : 1 }}
        >
          Suriin — Check Answer
        </button>
      ) : (
        <button className={`btn-press ${isCorrect ? '' : 'btn-press-red'}`} onClick={handleNext} style={{ width: '100%' }}>
          {currentQ + 1 >= QUIZ_QUESTIONS.length ? 'Tapusin — Finish Quiz 🏁' : 'Susunod — Next Question →'}
        </button>
      )}
    </div>
  )
}
