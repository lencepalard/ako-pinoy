'use server'

import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { db, users } from '@ako-pinoy/db'
import { SESSION_COOKIE, encodeSession } from '@/lib/auth'

// ── Input limits ──────────────────────────────────────────────
const MAX_EMAIL = 254
const MAX_NAME = 100
const MAX_PASSWORD = 128
const MIN_PASSWORD = 8

// ── In-memory rate limiter (per server instance) ──────────────
// Key: IP, Value: { count, resetAt }
const loginAttempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes

async function checkRateLimit(ip: string): Promise<boolean> {
  const now = Date.now()
  const entry = loginAttempts.get(ip)

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true // allowed
  }

  if (entry.count >= MAX_ATTEMPTS) return false // blocked

  entry.count++
  return true
}

function clearRateLimit(ip: string) {
  loginAttempts.delete(ip)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const COOKIE_OPTS = {
  httpOnly: true,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
}

// ── Sign In ───────────────────────────────────────────────────
export async function signIn(_prev: unknown, formData: FormData) {
  const headerStore = await headers()
  const ip = headerStore.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  const allowed = await checkRateLimit(ip)
  if (!allowed) {
    return { error: 'Too many login attempts. Please wait 15 minutes and try again.' }
  }

  const email = (formData.get('email') as string | null)?.trim().toLowerCase() ?? ''
  const password = (formData.get('password') as string | null) ?? ''

  // Input length limits
  if (email.length > MAX_EMAIL || password.length > MAX_PASSWORD) {
    return { error: 'Invalid input.' }
  }

  if (!email || !password) {
    return { error: 'Please enter your email and password.' }
  }

  if (!isValidEmail(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1)

  // Use constant-time compare even if user not found (prevents user enumeration timing attacks)
  const dummyHash = '$2b$10$aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  const valid = user
    ? await bcrypt.compare(password, user.passwordHash)
    : await bcrypt.compare(password, dummyHash)

  if (!user || !valid) {
    // Same error for both wrong email and wrong password (prevents user enumeration)
    return { error: 'Incorrect email or password.' }
  }

  clearRateLimit(ip)

  await db.update(users).set({ lastActiveAt: new Date() }).where(eq(users.id, user.id))

  const token = await encodeSession({
    id: user.id,
    email: user.email,
    username: user.username,
    displayName: user.displayName,
    xp: user.xp,
    level: user.level,
    streakDays: user.streakDays,
  })

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, COOKIE_OPTS)

  redirect('/dashboard')
}

// ── Sign Up ───────────────────────────────────────────────────
export async function signUp(_prev: unknown, formData: FormData) {
  const name = (formData.get('name') as string | null)?.trim() ?? ''
  const email = (formData.get('email') as string | null)?.trim().toLowerCase() ?? ''
  const password = (formData.get('password') as string | null) ?? ''

  // Input length limits
  if (name.length > MAX_NAME || email.length > MAX_EMAIL || password.length > MAX_PASSWORD) {
    return { error: 'Invalid input.' }
  }

  if (!name || !email || !password) {
    return { error: 'Please fill in all fields.' }
  }

  if (!isValidEmail(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  if (password.length < MIN_PASSWORD) {
    return { error: `Password must be at least ${MIN_PASSWORD} characters.` }
  }

  // Basic password strength: require at least one letter and one number
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return { error: 'Password must contain at least one letter and one number.' }
  }

  const [existing] = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1)
  if (existing) {
    return { error: 'An account with that email already exists.' }
  }

  const passwordHash = await bcrypt.hash(password, 12) // cost 12 = strong enough, not too slow
  const baseUsername = email.split('@')[0]!.replace(/[^a-z0-9]/gi, '').toLowerCase().slice(0, 20)
  const username = baseUsername + Math.floor(Math.random() * 9000 + 1000)

  const [user] = await db.insert(users).values({
    email,
    passwordHash,
    username,
    displayName: name.slice(0, MAX_NAME),
    lastActiveAt: new Date(),
  }).returning()

  if (!user) {
    return { error: 'Something went wrong. Please try again.' }
  }

  const token = await encodeSession({
    id: user.id,
    email: user.email,
    username: user.username,
    displayName: user.displayName,
    xp: user.xp,
    level: user.level,
    streakDays: user.streakDays,
  })

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, COOKIE_OPTS)

  redirect('/dashboard')
}

// ── Sign Out ──────────────────────────────────────────────────
export async function signOut() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
  redirect('/sign-in')
}
