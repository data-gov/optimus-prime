import { byYear } from '../../../src/clients/mongo/election'
import { ElectionService } from '../../../src/services/election'
import queryResults from '../../resources/fixtures/2014_presidents'
import testElection from '../../resources/fixtures/2006_election'
import * as ElectionClient from '../../../src/clients/mongo/election'
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

const { findCandidatesByRoleAndYear, findCandidateVotesInAYearByNameAndState } = ElectionService

describe('Election service', () => {
  it('should provide candidates filtered by role and year', async () => {
    ElectionClient.byYearAndRole = jest.fn((role, year) => Promise.resolve(queryResults))
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2014)
    expect(candidates).toEqual(expectedCadidates)
  })

  it('should return empty list when did not found results', async () => {
    ElectionClient.byYearAndRole = jest.fn((role, year) => Promise.resolve([]))
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2012)
    expect(candidates).toEqual([])
  })

  it('should return candidate votes by state', async () => {
    ElectionClient.byYear = jest.fn(() => Promise.resolve(testElection))
    const name = 'LUIZ INACIO LULA DA SILVA'
    const state = 'AC'
    const year = 2006
    const expectedResponse = { name, state, year, votes: { first: 133221, second: 151584, total: 284805 } }

    const votes = await findCandidateVotesInAYearByNameAndState(name, state, year)

    expect(votes).toEqual(expectedResponse)
  })
})
