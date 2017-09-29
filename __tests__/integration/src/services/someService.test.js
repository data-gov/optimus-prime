import { findAllSomeObject } from '../../../../src/services/someService'
import { closeDBConnection, connectDB } from '../config/integrationTest'

describe('Some service integration test', () => {
  beforeAll(async () => {
    await connectDB()
  })

  afterAll(() => {
    closeDBConnection()
  })

  it('should find all some object from DB', async () => {
    const someObjects = await findAllSomeObject()
    expect(someObjects.length).toBeGreaterThan(0)
  })
})
