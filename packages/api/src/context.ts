import { db } from '@ako-pinoy/db'

export async function createContext({ req }: { req: Request }) {
  // userId is the real DB user ID, passed via request header
  const userId = req.headers.get('x-user-id') ?? null
  return { db, userId, req }
}

export type Context = Awaited<ReturnType<typeof createContext>>
