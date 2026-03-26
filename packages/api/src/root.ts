import { createTRPCRouter } from './trpc'
import { usersRouter } from './routers/users'
import { lessonsRouter } from './routers/lessons'
import { vocabularyRouter } from './routers/vocabulary'

export const appRouter = createTRPCRouter({
  users: usersRouter,
  lessons: lessonsRouter,
  vocabulary: vocabularyRouter,
})

export type AppRouter = typeof appRouter
