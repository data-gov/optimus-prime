import { Router } from 'express'
import { graphiqlExpress } from 'apollo-server-express'
import { getGraphqlConfig } from '../../config/graphql'

export const getGraphqlRouter = async () => {
  const router = Router()
  const graphqlConfig = await getGraphqlConfig()
  const graphiqlConfig = { endpointURL: '/graphql' }

  router.use('/graphiql', graphiqlExpress(graphiqlConfig))
  router.use('/graphql', graphqlConfig)

  return router
}
