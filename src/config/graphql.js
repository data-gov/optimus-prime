import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { services } from '../services'
import { schema } from '../graphql'

export const getGraphiqlConfig = () => graphiqlExpress({ endpointURL: '/graphql' })
export const getGraphqlConfig = () => {
  const graphqlConfig = {
    context: { services },
    tracing: true,
    debug: true,
    schema
  }

  return graphqlExpress(graphqlConfig)
}
