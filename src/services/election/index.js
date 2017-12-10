import {
  countCandidateVote,
  filterByYearAndRole,
  filterByYearAndStateWithVotesSum,
  findCandidateVotesByYearAndName,
  mapToCandidatesVote
} from './electionServiceMapper'

const SHIFT = { FIRST: 1, SECOND: 2 }

const findCandidatesByRoleAndYear = async (role, year) => {
  const candidatesByRole = await filterByYearAndRole(year, role)
  return candidatesByRole.map(candidate => candidate.name)
}

const findCandidateVotesInAYearByNameAndState = async (name, state, year) => {
  const candidateVotes = await findCandidateVotesByYearAndName(year, name)
  const votesCount = countCandidateVote(candidateVotes, state)
  return mapToCandidatesVote(name, state, year, votesCount)
}

const findMostVoteCandidateInYearByState = async (year, state, shift = SHIFT.FIRST) => {
  const candidatesByState = await filterByYearAndStateWithVotesSum(year, state)

  const mostVoted = candidatesByState.reduce((mostVoted, candidate) => {
    if (!mostVoted.votes[shift]) { return candidate }
    return mostVoted.votes[shift] < candidate.votes[shift] ? candidate : mostVoted
  }, candidatesByState[0])

  return mapToCandidatesVote(mostVoted.name, state, year, mostVoted.votes)
}

export const ElectionService = {
  findCandidatesByRoleAndYear,
  findMostVoteCandidateInYearByState,
  findCandidateVotesInAYearByNameAndState
}
