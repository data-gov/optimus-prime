import {getMongoConnection} from '../../config/mongo'

const collection = async () => {
  const mongo = await getMongoConnection()
  return mongo.collection('elections')
}

export const byRoleAndYear = async (role, year) => {
  const elections = await collection()
  const byRoleAndYear = {_id: year, post: {$elemMatch: {postDescription: role}}}
  return elections.find(byRoleAndYear).project({'post': 1})
    .toArray()
}
