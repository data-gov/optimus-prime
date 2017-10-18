import request from 'supertest'
import { initializeApp } from '../../../src/app'

describe('Routes: Not Found', () => {
  describe('GET /url invalid', () => {
    let app

    beforeAll(async (done) => {
      app = await initializeApp()
      done()
    })

    it('should return 404', async () => {
      const response = await request(app).get('/urlnotfound')

      expect(response.statusCode).toEqual(404)
      expect(response.error).not.toEqual(undefined)
    })
  })
})
