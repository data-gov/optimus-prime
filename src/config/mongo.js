import debug from 'debug'
import { Logger, MongoClient } from 'mongodb'
import {OPTIMUS_PRIME_DEBUG} from './constants'

let mongo
const logger = debug(OPTIMUS_PRIME_DEBUG)

const ELECTION_DB_URL = process.env.MONGO_URL

export const getMongoConnection = async () => mongo || connectMongo()

export const connectMongo = async () => {
  mongo = await MongoClient.connect(ELECTION_DB_URL)
  setupLogger()
}

const setupLogger = () => {
  let logCount = 0
  Logger.setCurrentLogger(msg => {
    logger(`MONGO DB REQUEST ${++logCount}:`)
    logger(msg)
  })
  Logger.setLevel('debug')
  Logger.filter('class', ['Cursor'])
}
