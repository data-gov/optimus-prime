import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { mongoConnection } from './mongo'
import { schema } from '../graphql'

export const getGraphqlConfig = async () => {
  const mongo = await mongoConnection()
  const graphqlConfig = {
    context: { mongo },
    debug: true,
    schema
  }

  return graphqlExpress(graphqlConfig)
}

export const getGraphiqlConfig = () => {
  const graphiqlConfig = { endpointURL: '/graphql' }
  return graphiqlExpress(graphiqlConfig)
}
