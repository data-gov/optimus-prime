import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { mongoConnection } from './mongo'
import { schema } from '../graphql'
import ExpenseService from '../services/expense'

export const getGraphqlConfig = async () => {
  await mongoConnection()
  const graphqlConfig = {
    context: {
      services: {
        ExpenseService
      }
    },
    debug: true,
    schema
  }

  return graphqlExpress(graphqlConfig)
}

export const getGraphiqlConfig = () => {
  const graphiqlConfig = { endpointURL: '/graphql' }
  return graphiqlExpress(graphiqlConfig)
}
