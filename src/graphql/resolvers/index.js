import { Mutation } from './mutation'
import { Query } from './query'

const resolveMongoId = { id: root => root._id || root.id }

export const resolvers = {
  Query,
  Mutation,
  Link: resolveMongoId,
  Expense: resolveMongoId
}
