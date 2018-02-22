const ElectionClient = require('../../../clients/mongo/election');
const { ElectionService } = require('../../../services/election');
const testElection = require('../../../__tests__/resources/fixtures/2006_election');
const queryResults = require('../../../__tests__/resources/fixtures/2014_presidents');

jest.mock('../../../clients/mongo/election');

const expectedCadidates = [
  'MAURO LUÍS IASI',
  'RUI COSTA PIMENTA',
  'JOSÉ LEVY FIDELIX DA CRUZ',
  'MARIA OSMARINA MARINA DA SILVA VAZ DE LIMA',
  'EVERALDO DIAS PEREIRA',
  'AÉCIO NEVES DA CUNHA',
  'JOSE MARIA EYMAEL',
  'LUCIANA KREBS GENRO',
  'JOSÉ MARIA DE ALMEIDA',
  'DILMA VANA ROUSSEFF',
  'EDUARDO JORGE MARTINS ALVES SOBRINHO',
];

const {
  findCandidatesByRoleAndYear,
  findCandidateVotesInAYearByNameAndState,
  findMostVoteCandidateInYearByState,
  findTopVotingStateByCandidateName,
  findElectionWinner,
} = ElectionService;

describe('Election service', () => {
  it('should provide candidates filtered by role and year', async () => {
    ElectionClient.byYearAndRole = jest.fn(() => Promise.resolve(queryResults));
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2014);
    expect(candidates).toEqual(expectedCadidates);
  });

  it('should return empty list when did not found results', async () => {
    ElectionClient.byYearAndRole = jest.fn(() => Promise.resolve([]));
    const candidates = await findCandidatesByRoleAndYear('PRESIDENTE', 2012);
    expect(candidates).toEqual([]);
  });

  it('should return candidate votes by state', async () => {
    ElectionClient.byYear = jest.fn(() => Promise.resolve(testElection));
    const name = 'LUIZ INACIO LULA DA SILVA';
    const state = 'AC';
    const year = 2006;
    const expectedResponse = {
      name,
      state,
      year,
      votes: { first: 133221, second: 151584, total: 284805 },
    };

    const votes = await findCandidateVotesInAYearByNameAndState(
      name,
      state,
      year,
    );

    expect(votes).toEqual(expectedResponse);
  });

  it('should return most voted candidate by state', async () => {
    ElectionClient.byYear = jest.fn(() => Promise.resolve(testElection));
    const year = 2006;
    const state = 'ES';
    const expected = {
      name: 'LUIZ INACIO LULA DA SILVA',
      year,
      state,
      votes: { first: 953609, second: 1190459, total: 2144068 },
    };

    const candidate = await findMostVoteCandidateInYearByState(year, state);
    expect(candidate).toEqual(expected);
  });

  it('should return most voted candidate by state for a specific shift', async () => {
    ElectionClient.byYear = jest.fn(() => Promise.resolve(testElection));
    const year = 2006;
    const state = 'RS';
    const expected = {
      name: 'GERALDO JOSÉ RODRIGUES ALCKMIN FILHO',
      state: 'RS',
      votes: { first: 3460730, second: 3485916, total: 6946646 },
      year: 2006,
    };

    const candidate = await findMostVoteCandidateInYearByState(year, state, 1);
    expect(candidate).toEqual(expected);
  });

  describe('findTopVotingStateByCandidateName', () => {
    ElectionClient.byYear = jest.fn(() => Promise.resolve(testElection));
    const name = 'RUI COSTA PIMENTA';
    const state = 'SP';
    const year = 2006;

    it('should return state that voted most in a candidate', async () => {
      const expectedResponse = {
        name,
        state,
        year,
        votes: { first: 4973, second: 0, total: 4973 },
      };
      const votes = await findTopVotingStateByCandidateName(year, name, 1);
      expect(votes).toEqual(expectedResponse);
    });

    it('should return undefined if candidate doest participate of second shift', async () => {
      const expectedResponse = undefined;
      const votes = await findTopVotingStateByCandidateName(year, name, 2);
      expect(votes).toEqual(expectedResponse);
    });
  });

  it('should return election winnner', async () => {
    ElectionClient.byYearAndRole = jest.fn(() => Promise.resolve(queryResults));
    const electionWinner = await findElectionWinner(2014);
    expect(electionWinner).toEqual('DILMA VANA ROUSSEFF');
  });
});
