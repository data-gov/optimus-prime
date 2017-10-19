import { Router } from 'express'
import { getGraphqlConfig, getGraphiqlConfig } from '../../config/graphql'

export const getGraphqlRouter = async () => {
  const router = Router()
  const graphqlConfig = await getGraphqlConfig()
  const graphiqlConfig = getGraphiqlConfig()

  router.use('/graphiql', graphiqlConfig)
  router.use('/graphql', graphqlConfig)

  return router
}
