const { MongoClient } = require('mongodb')

export const mongoConnection = async () => {
  const db = await MongoClient.connect(process.env.MONGO_URL)
  return {
    Links: db.collection('links')
  }
}
