import request from 'supertest'
import app from '../../../../src/app'

import * as SomeService from '../../../../src/services/someService'
jest.mock('../../../../src/services/someService')

describe('Some Controller test', () => {
  it('should find all some objects', async () => {
    const dummySomeObject = { id: 'unique_id' }
    SomeService.findAllSomeObject = jest.fn(() => Promise.resolve(dummySomeObject))
    const response = await request(app).get('/some/')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(dummySomeObject)
    expect(SomeService.findAllSomeObject).toHaveBeenCalled()
  })
})
