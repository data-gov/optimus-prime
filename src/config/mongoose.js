import mongoose from 'mongoose'
import blueBird from 'bluebird'
import { connectMongo } from '../mongoose'

export async function mongooseConfig (environment) {
  if (environment === 'test') { return }

  const options = { useMongoClient: true, promiseLibrary: blueBird }
  let mongoURL = environment === 'integration-test' ? process.env.MONGO_TEST_URL : process.env.MONGO_URL
  mongoose.Promise = blueBird

  await connectMongo(mongoURL, options)
}

export const parserOptions = {
  virtuals: true,
  getters: true,
  minimize: false,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    return ret
  }
}
