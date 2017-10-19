import { Logger, MongoClient } from 'mongodb'

let mongo

export const getMongoConnection = async () => {
  if (!mongo) {
    await connectMongo()
  }

  return mongo
}

export const connectMongo = async () => {
  mongo = await MongoClient.connect(process.env.MONGO_URL)
  setupLogger()
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
