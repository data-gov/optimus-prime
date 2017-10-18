import { MongoClient } from 'mongodb'

export const mongoConnection = async () => {
  const db = await MongoClient.connect(process.env.MONGO_URL)
  return {
    Links: db.collection('links'),
    Expenses: db.collection('expenses')
  }
}
