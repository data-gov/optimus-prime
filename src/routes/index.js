import { Router } from 'express'

import health from './health'
import { notFound } from './error/notFound'
import { errorHandler } from './error/errorHandler'
import { getGraphqlRouter } from './graphql'

export const getRouter = async () => {
  const router = Router()
  const graphqlRouter = await getGraphqlRouter()

  router.use('/health', health)
  router.use(graphqlRouter)
  router.use(notFound)
  router.use(errorHandler)

  return router
}
