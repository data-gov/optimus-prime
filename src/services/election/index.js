import {
  countCandidateVote,
  filterByYearAndRole,
  mapToCandidatesVote,
  findCandidateVotesByYearAndName
} from './electionServiceMapper'

const findCandidatesByRoleAndYear = async (role, year) => {
  const candidatesByRole = await filterByYearAndRole(year, role)
  return candidatesByRole.map(candidate => candidate.name)
}

const findCandidateVotesInAYearByNameAndState = async (name, state, year) => {
  const candidateVotes = await findCandidateVotesByYearAndName(year, name)
  const votesCount = countCandidateVote(candidateVotes, state)
  return mapToCandidatesVote(name, state, year, votesCount)
}

export const ElectionService = {
  findCandidatesByRoleAndYear,
  findCandidateVotesInAYearByNameAndState
}
