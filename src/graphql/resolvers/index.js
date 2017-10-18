import { Query } from './query'

const resolveMongoId = { id: root => root._id || root.id }

export const resolvers = {
  Query,
  Link: resolveMongoId,
  Expense: resolveMongoId,
  Provider: resolveMongoId,
  Receipt: resolveMongoId
}
