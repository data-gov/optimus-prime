import mockedElectionData from './mockedElectionData'
import {findCongressmanById} from './congressman'
import {byRoleAndYear} from '../clients/mongo/election'

export const findMostVotedDeputyByState = async (state) => {
  const votes = mockedElectionData[state]
  const mostVoted = votes.sort((a, b) => b.votes - a.votes)[0]
  return findCongressmanById(mostVoted.id)
}

export const findCandidatesByRoleAndYear = async (role, year) => {
  const election = await byRoleAndYear(role, year)
  const candidatesByRole = election.post[0].candidates
  return candidatesByRole.map(candidate => candidate.name)
}

export default {
  findMostVotedDeputyByState
}
