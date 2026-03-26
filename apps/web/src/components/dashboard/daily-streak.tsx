'use client'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function DailyStreak() {
  const today = new Date().getDay() // 0=Sun
  const todayIdx = today === 0 ? 6 : today - 1

  return (
    <div
      className="card"
      style={{
        background: 'linear-gradient(135deg, #f97316 0%, #fcd116 100%)',
        border: 'none',
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '3rem' }}>🔥</span>
          <div>
            <div
              style={{ fontFamily: 'var(--font-nunito)', fontWeight: 900, fontSize: '2.5rem', lineHeight: 1 }}
            >
              0
            </div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', opacity: 0.9 }}>
              day streak — learn today to keep it!
            </div>
          </div>
        </div>

        {/* Week view */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {DAYS.map((day, i) => (
            <div
              key={day}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: i === todayIdx ? 'white' : 'rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                }}
              >
                {i < todayIdx ? '✓' : i === todayIdx ? '⭐' : '○'}
              </div>
              <span style={{ fontSize: '0.6875rem', opacity: 0.85 }}>{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
