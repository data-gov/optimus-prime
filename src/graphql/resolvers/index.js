import { queryResolvers } from './query'

const resolveMongoId = { id: root => root._id || root.id }

export const resolvers = {
  Query: queryResolvers,
  Congressman: resolveMongoId,
  Expense: resolveMongoId,
  Provider: resolveMongoId,
  Receipt: resolveMongoId
}
