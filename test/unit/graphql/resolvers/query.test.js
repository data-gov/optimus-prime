import { congressmanFilterBuilder } from '../../../../src/graphql/resolvers/query'

describe('Graphql resolvers', () => {
  describe('Congressmen query', () => { 
    it('should transform graphql filter into mongo filter', async () => {
      const name = 'Lino'
      const graphqlFilter = { nameContains: name }
      const expectedMongoFilter = { name: { $regex: `.*${name}.*` } }
      const filter = congressmanFilterBuilder(graphqlFilter)

      expect(filter).toEqual(expectedMongoFilter)
    })
  })
})
