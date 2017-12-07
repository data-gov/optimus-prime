import debug from 'debug'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { OPTIMUS_PRIME_DEBUG } from '../config/constants'

const logger = { log: msg => debug(OPTIMUS_PRIME_DEBUG)(msg) }

export const schema = makeExecutableSchema({typeDefs, resolvers, logger})
