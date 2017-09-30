import { getAll } from '../../../src/controllers/congressman'

describe('Controller: Congressman', () => {
  describe('get() congressman', () => {
    it('should return a list of congressman', () => {
      const request = {}
      const response = {
        send: jest.fn()
      }
      const congressman = [
        {
          id: 1,
          name: 'Default product',
          partyAcronym: 'PPP',
          stateAcronym: 'RS',
          photoUrl: 'http://photo.url.com'
        }
      ]

      getAll(request, response)

      expect(response.send).toBeCalledWith(congressman)
    })
  })
})
