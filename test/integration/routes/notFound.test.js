import request from 'supertest'
import app from '../../../src/app'

describe('Routes: Not Found', () => {
  describe('GET /url invalid', () => {
    it('should return 404', async () => {
      const response = await request(app).get('/urlnotfound')

      expect(response.statusCode).toEqual(404)
      expect(response.error).not.toEqual(undefined)
    })
  })
})
