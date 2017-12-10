import { countCandidateVote, mapToCandidatesVote } from '../../../src/services/election/electionServiceMapper'
import MauroLuisVotes from '../../resources/fixtures/mauro_luis_2014_votes'

describe('Election Mapper', () => {
  it('should ignore count if candidate does not have second shift votes', async () => {
    const name = 'MAURO LUÍS IASI'

    const state = 'AC'
    const year = '2014'
    const expected = {
      name,
      state,
      year,
      votes: {
        first: 68,
        second: 0,
        total: 68
      }
    }

    const votesCount = countCandidateVote(MauroLuisVotes.votes, state)
    const votes = mapToCandidatesVote(name, state, year, votesCount)

    expect(votes).toEqual(expected)
  })
})
