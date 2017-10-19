import { getMongoConnection } from '../config/mongo'

export const findAllExpenses = async () => {
  const mongo = await getMongoConnection()
  const expensesCollection = mongo.collection('expenses')
  return expensesCollection.find({}).toArray()
}

export default {
  findAllExpenses
}
