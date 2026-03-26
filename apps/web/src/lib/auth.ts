import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

export const SESSION_COOKIE = 'ako-pinoy-session'

export interface SessionUser {
  id: string
  email: string
  username: string
  displayName: string | null
  xp: number
  level: string
  streakDays: number
}

function getSecret(): Uint8Array {
  const secret = process.env['SESSION_SECRET']
  if (!secret || secret.length < 32) throw new Error('SESSION_SECRET env var is missing or too short')
  return new TextEncoder().encode(secret)
}

export async function encodeSession(user: SessionUser): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .setSubject(user.id)
    .sign(getSecret())
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as unknown as SessionUser
  } catch {
    // Token invalid, expired, or tampered
    return null
  }
}
