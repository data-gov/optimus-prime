import mockedElectionData from './mockedElectionData'
import { findCongressmanById } from './congressman'

export const findMostVotedDeputyByState = async (state) => {
  const votes = mockedElectionData[state]
  const mostVoted = votes.sort((a, b) => b.votes - a.votes)[0]
  return findCongressmanById(mostVoted.id)
}

export default {
  findMostVotedDeputyByState
}
