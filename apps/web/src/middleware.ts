import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SESSION_COOKIE = 'ako-pinoy-session'

const PROTECTED = ['/dashboard', '/lessons', '/quiz', '/vocabulary', '/scenarios', '/culture', '/leaderboard', '/profile']
const AUTH_ONLY = ['/sign-in', '/sign-up'] // redirect away if already logged in

function getSecret(): Uint8Array {
  const secret = process.env['SESSION_SECRET'] ?? ''
  return new TextEncoder().encode(secret)
}

async function isValidSession(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret())
    return true
  } catch {
    return false
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get(SESSION_COOKIE)?.value
  const loggedIn = token ? await isValidSession(token) : false

  // Logged-in users can't visit sign-in/sign-up — redirect to dashboard
  if (AUTH_ONLY.some((p) => pathname.startsWith(p)) && loggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // Non-logged-in users can't visit protected pages — redirect to sign-in
  if (PROTECTED.some((p) => pathname === p || pathname.startsWith(p + '/')) && !loggedIn) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'],
}
