import {findCandidatesByRoleAndYear} from '../../../src/services/election'
import * as ElectionClient from '../../../src/clients/mongo/election'
import queryCandidatesByRoleAndYear from '../../resources/fixtures/queryCandidatesByRoleAndYear'
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
    ElectionClient.byRoleAndYear = jest.fn((role, year) => Promise.resolve(queryCandidatesByRoleAndYear))
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2014)
    expect(candidates).toEqual(expectedCadidates)
  })

  it('should return empty list when did not found results', async () => {
    ElectionClient.byRoleAndYear = jest.fn((role, year) => Promise.resolve([]))
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2012)
    expect(candidates).toEqual([])
  })
})
