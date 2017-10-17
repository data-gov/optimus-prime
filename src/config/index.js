import dotenv from 'dotenv'
const { MongoClient } = require('mongodb')

export async function initConfigurations () {
  dotenv.config()
}

export const mongoConnection = async () => {
  const db = await MongoClient.connect(process.env.MONGO_URL)
  return {
    Links: db.collection('links')
  }
}
