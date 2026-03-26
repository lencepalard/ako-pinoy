import { LessonsList } from '@/components/lessons/lessons-list'

export const metadata = { title: 'Lessons' }

export default function LessonsPage(): React.JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ph-blue)', marginBottom: '0.5rem' }}>
          📚 Mga Aralin — Lessons
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-inter)' }}>
          15 lessons covering language, culture, and real-life Filipino scenarios.
        </p>
      </div>
      <LessonsList />
    </div>
  )
}
