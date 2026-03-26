import { auth } from '@clerk/nextjs/server'
import { db } from '@ako-pinoy/db'

export async function createContext({ req }: { req: Request }) {
  const { userId } = await auth()
  return { db, userId, req }
}

export type Context = Awaited<ReturnType<typeof createContext>>
