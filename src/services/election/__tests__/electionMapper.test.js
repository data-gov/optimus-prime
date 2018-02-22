const {
  mapCandidateVoteForState,
  findSecondShiftWinner,
  findFirstShiftWinner,
  mapToCandidatesVote,
} = require('../electionServiceMapper');
const candidatesWithoutSecondShift = require('../../../__tests__/resources/fixtures/1998_candidates');
const {
  votes,
} = require('../../../__tests__/resources/fixtures/mauro_luis_2014_votes');
const candidatesWithSecondShift = require('../../../__tests__/resources/fixtures/2014_candidates');

describe('Election Mapper', () => {
  it('should ignore count if candidate does not have second shift votes', async () => {
    const name = 'MAURO LUÍS IASI';

    const state = 'AC';
    const year = '2014';
    const expected = {
      name,
      state,
      year,
      votes: {
        first: 68,
        second: 0,
        total: 68,
      },
    };

    const votesCount = mapCandidateVoteForState(votes, state);
    const candidateVotes = mapToCandidatesVote(name, state, year, votesCount);

    expect(candidateVotes).toEqual(expected);
  });

  it('should calculate first shift winner', () => {
    const winner = findFirstShiftWinner(candidatesWithoutSecondShift);
    expect(winner).toEqual('FERNANDO HENRIQUE CARDOSO');
  });

  it('should calculate second shift winner', () => {
    const winner = findSecondShiftWinner(candidatesWithSecondShift);
    expect(winner).toEqual('DILMA VANA ROUSSEFF');
  });
});
