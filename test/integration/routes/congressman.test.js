import request from 'supertest'
import app from '../../../src/app'

describe('Routes: Congressman', () => {
  describe('GET /congressman', () => {
    it('should return a list of congressman', async () => {
      const congressmanResponse = [
        {
          id: 1,
          name: 'Congressman',
          partyAcronym: 'PPP',
          stateAcronym: 'RS',
          photoUrl: 'http://photo.url.com'
        }
      ]

      const response = await request(app).get('/congressman')

      expect(response.statusCode).toEqual(200)
      expect(response.body).toEqual(congressmanResponse)
    })
  })
})
