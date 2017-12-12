import {
  calculateSecondShiftWinner, mapCandidateVoteForState,
  mapToCandidatesVote,
} from '../../../src/services/election/electionServiceMapper'
import { candidatesVotesMap } from '../../resources/fixtures/calculateSecondShiftWinner'
import { votes } from '../../resources/fixtures/mauro_luis_2014_votes'

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
        total: 68,
      },
    }

    const votesCount = mapCandidateVoteForState(votes, state)
    const candidateVotes = mapToCandidatesVote(name, state, year, votesCount)

    expect(candidateVotes).toEqual(expected)
  })

  it('should calculate second shift winner', () => {
    const winner = calculateSecondShiftWinner(candidatesVotesMap)
    expect(winner).toEqual('DILMA VANA ROUSSEFF')
  })
})
