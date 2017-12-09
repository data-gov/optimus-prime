import { queries } from './queries'
import Expense from './expense'
import Congressman from './congressman'
import Election from './election'

export const typeDefs = [
  queries,
  Expense,
  Election,
  Congressman
]
