import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import ExpenseService from '../services/expense'
import { schema } from '../graphql'

export const getGraphqlConfig = () => {
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
