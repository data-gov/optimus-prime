import {findCandidatesByRoleAndYear, findCandidateVotesInAYearByNameAndState} from '../../../src/services/election'
import * as ElectionClient from '../../../src/clients/mongo/election'
import queryResults from '../../resources/fixtures/2014_presidents'
jest.mock('../../../src/clients/mongo/election')

const expectedCadidates = [ 'MAURO LUÍS IASI',
  'RUI COSTA PIMENTA',
  'JOSÉ LEVY FIDELIX DA CRUZ',
  'MARIA OSMARINA MARINA DA SILVA VAZ DE LIMA',
  'EVERALDO DIAS PEREIRA',
  'AÉCIO NEVES DA CUNHA',
  'JOSE MARIA EYMAEL',
  'LUCIANA KREBS GENRO',
  'JOSÉ MARIA DE ALMEIDA',
  'DILMA VANA ROUSSEFF',
  'EDUARDO JORGE MARTINS ALVES SOBRINHO' ]

describe('Election service', () => {
  it('should provide candidates filtered by role and year', async () => {
    ElectionClient.byRoleAndYear = jest.fn((role, year) => Promise.resolve(queryResults))
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2014)
    expect(candidates).toEqual(expectedCadidates)
  })

  it('should return empty list when did not found results', async () => {
    ElectionClient.byRoleAndYear = jest.fn((role, year) => Promise.resolve([]))
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2012)
    expect(candidates).toEqual([])
  })

  it('should', async () => {
    ElectionClient.byRoleAndYear = jest.fn((role, year) => Promise.resolve(queryResults))
    const name = 'DILMA VANA ROUSSEFF'
    const expectedResponse = { name, votes: { first: 111641, second: 138982, total: 250623 } }

    const candidates = await findCandidateVotesInAYearByNameAndState(name, 'AC', 2014)

    expect(candidates).toEqual(expectedResponse)
  })
})
