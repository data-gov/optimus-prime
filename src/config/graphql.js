import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { services } from '../services'
import { schema } from '../graphql'

export const getGraphqlConfig = () => {
  const graphqlConfig = {
    context: { services },
    debug: true,
    schema
  }

  return graphqlExpress(graphqlConfig)
}

export const getGraphiqlConfig = () => {
  const graphiqlConfig = { endpointURL: '/graphql' }
  return graphiqlExpress(graphiqlConfig)
}
