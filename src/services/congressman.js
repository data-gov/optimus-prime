import { getMongoConnection } from '../config/mongo'
const FIND_ALL = {}

const collection = async () => {
  const mongo = await getMongoConnection()
  return mongo.collection('congressmen')
}

export const findAllCongressmen = async (filter = FIND_ALL) => {
  const congressmenCollection = await collection()
  return congressmenCollection.find(filter).toArray()
}

export const findCongressmanById = async (id) => {
  const congressmenCollection = await collection()
  return congressmenCollection.findOne({ _id: id })
}

export default {
  findAllCongressmen,
  findCongressmanById
}
