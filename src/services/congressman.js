import { getMongoConnection } from '../config/mongo'

export const findAllCongressmen = async () => {
  const mongo = await getMongoConnection()
  const congressmenCollection = mongo.collection('congressmen')
  return congressmenCollection.find({}).toArray()
}

export default {
  findAllCongressmen
}
