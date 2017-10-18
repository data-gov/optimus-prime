import request from 'supertest'
import { initializeApp } from '../../../src/app'

describe('Routes: Health', () => {
  describe('GET /health', () => {
    let app

    beforeAll(async (done) => {
      app = await initializeApp()
      done()
    })

    it('should return app information', async () => {
      const response = await request(app).get('/health')

      expect(response.statusCode).toEqual(200)
      expect(response.body.birthTime).not.toBe(undefined)
    })
  })
})
