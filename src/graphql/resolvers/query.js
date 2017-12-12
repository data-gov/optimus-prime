const topVotingState = async (obj, { name, year, shift }, { services: { ElectionService } }) =>
  ElectionService.findTopVotingStateByCandidateName(year, name, shift)

const candidatesByRoleAndYear = async (obj, { role, year }, { services: { ElectionService } }) =>
  ElectionService.findCandidatesByRoleAndYear(role, year)

const findCandidateVotesInAYearByNameAndState = async (obj, { name, state, year }, { services: { ElectionService } }) =>
  ElectionService.findCandidateVotesInAYearByNameAndState(name, state, year)

const mostVotedInYearByState = async (obj, { state, year, shift }, { services: { ElectionService } }) =>
  ElectionService.findMostVoteCandidateInYearByState(year, state, shift)

const electionWinner = async (obj, { year }, { services: { ElectionService } }) =>
  ElectionService.findElectionWinner(year)

export const queryResolvers = {
  topVotingState,
  electionWinner,
  mostVotedInYearByState,
  candidatesByRoleAndYear,
  findCandidateVotesInAYearByNameAndState
}
