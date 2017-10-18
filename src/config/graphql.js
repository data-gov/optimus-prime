import { graphqlExpress } from 'apollo-server-express'
import { mongoConnection } from './mongo'
import { schema } from '../graphql'

export const getGraphqlConfig = async () => {
  const mongo = await mongoConnection()
  const graphqlConfig = {
    context: { mongo },
    schema
  }

  return graphqlExpress(graphqlConfig)
}
