import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Link {
    id: ID!
    url: String!
    description: String!
  }

  type Mutation {
    createLink(url: String!, description: String!): Link
  }
  
  type Query {
    allLinks: [Link!]!
  }
`

export default makeExecutableSchema({typeDefs, resolvers})
