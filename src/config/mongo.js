import { Logger, MongoClient } from 'mongodb'

let mongo

export const getMongoConnection = async () => {
  if (!mongo) {
    mongo = await MongoClient.connect(process.env.MONGO_URL)
    setupLogger()
  }

  return mongo
}

export const mongoConnection = async () => {
  const db = await getMongoConnection()

  return {
    Links: db.collection('links'),
    Expenses: db.collection('expenses')
  }
}

const setupLogger = () => {
  let logCount = 0
  Logger.setCurrentLogger(msg => {
    console.log(`MONGO DB REQUEST ${++logCount}:`)
    console.log(msg)
  })
  Logger.setLevel('debug')
  Logger.filter('class', ['Cursor'])
}
