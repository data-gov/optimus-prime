import {connectMongo} from '../../../../src/config/mongo'
import {readDotEnvFile} from '../../../../src/config/dotEnv'
import {byRoleAndYear} from '../../../../src/clients/mongo/election'

xdescribe('Mongo election client', () => {
  beforeAll(async () => {
    await readDotEnvFile()
    await connectMongo()
  })

  it('should return candidates by role and year', async () => {
    const year = 2014
    const role = 'PRESIDENTE'
    const candidates = await byRoleAndYear(role, year)
    expect(candidates[0]._id).toEqual(year)
    expect(candidates[0].post[0].postDescription).toEqual(role)
  })
})
