import {
  countCandidateVote,
  filterByYearAndRole,
  filterByYearAndStateWithVotesSum,
  findCandidateVotesByYearAndName,
  mapToCandidatesVote
} from './electionServiceMapper'

export const SHIFT = { 1: 'first', 2: 'second', 3: 'total' }

const findCandidatesByRoleAndYear = async (role, year) => {
  const candidatesByRole = await filterByYearAndRole(year, role)
  return candidatesByRole.map(candidate => candidate.name)
}

const findCandidateVotesInAYearByNameAndState = async (name, state, year) => {
  const candidateVotes = await findCandidateVotesByYearAndName(year, name)
  const votesCount = countCandidateVote(candidateVotes, state)
  return mapToCandidatesVote(name, state, year, votesCount)
}

const findMostVoteCandidateInYearByState = async (year, state, shiftNumber = 3) => {
  const shift = SHIFT[shiftNumber]
  const candidatesByState = await filterByYearAndStateWithVotesSum(year, state)

  return candidatesByState.reduce(mostVoted(shift), candidatesByState[0])
}

const mostVoted = shift => (mostVoted, candidate) => {
  if (!mostVoted.votes[shift]) { return candidate }
  return mostVoted.votes[shift] < candidate.votes[shift] ? candidate : mostVoted
}

export const ElectionService = {
  findCandidatesByRoleAndYear,
  findMostVoteCandidateInYearByState,
  findCandidateVotesInAYearByNameAndState
}
