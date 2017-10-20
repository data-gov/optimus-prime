import { getMongoConnection } from '../config/mongo'
const FIND_ALL = {}

export const findAllCongressmen = async (filter = FIND_ALL) => {
  const mongo = await getMongoConnection()
  const congressmenCollection = mongo.collection('congressmen')
  return congressmenCollection.find(filter).toArray()
}

export default {
  findAllCongressmen
}
