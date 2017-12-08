import { getMongoConnection } from '../../config/mongo'

const collection = async () => (await getMongoConnection()).collection('elections')

export const byRoleAndYear = async (role, year) => {
  const elections = await collection()
  const byRoleAndYear = {_id: year, post: {$elemMatch: {postDescription: role}}}
  const election = elections.find(byRoleAndYear).toArray()
  return election[0] || []
}
