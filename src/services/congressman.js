import { getMongoConnection } from '../config/mongo'
const FIND_ALL = {}

// FIXME: Isso nao vai funcionar, o banco que tem informacoes de deputados nao eh o mesmo que tem dados de eleicoes,
// precisamos fazer o app entender que existe dois bancos em lugares diferentes
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

export const CongressmenService = {
  findAllCongressmen,
  findCongressmanById
}
