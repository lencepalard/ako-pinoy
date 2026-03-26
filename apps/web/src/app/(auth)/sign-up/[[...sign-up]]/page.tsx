import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0038a8 0%, #ce1126 100%)',
        padding: '1.5rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem' }}>🇵🇭</div>
          <h1
            style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 900,
              fontSize: '1.75rem',
              color: 'white',
              margin: '0.5rem 0',
            }}
          >
            Join Ako Pinoy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
            Libre forever. Magsimula na tayo!
          </p>
        </div>
        <SignUp
          appearance={{
            variables: {
              colorPrimary: '#0038a8',
              colorBackground: '#fffdf5',
              borderRadius: '0.75rem',
            },
          }}
        />
      </div>
    </div>
  )
}
