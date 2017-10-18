import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const logger = { log: (e) => console.log(e) }

export const schema = makeExecutableSchema({typeDefs, resolvers, logger})
