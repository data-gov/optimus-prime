import request from 'supertest'
import app from '../../../src/app'

describe('Routes: Health', () => {
  describe('GET /health', () => {
    it('should return app information', async () => {
      const response = await request(app).get('/health')

      expect(response.statusCode).toEqual(200)
      expect(response.body.birthTime).not.toBe(undefined)

    })
  })
})
