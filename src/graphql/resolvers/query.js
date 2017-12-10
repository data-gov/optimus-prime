const FIND_ALL = {}

const allCongressmen = async (obj, { filter }, { services: { CongressmenService } }) =>
  CongressmenService.findAllCongressmen(filter)

const topVotingState = async (obj, { role, year }, { services: { ElectionService } }) =>
  ElectionService.findCandidatesByRoleAndYear(role, year)

const candidatesByRoleAndYear = async (obj, { role, year }, { services: { ElectionService } }) =>
  ElectionService.findCandidatesByRoleAndYear(role, year)

const candidateVotesByState = async (obj, { name, state, year }, { services: { ElectionService } }) =>
  ElectionService.findCandidateVotesInAYearByNameAndState(name, state, year)

const mostVotedInYearByState = async (obj, { state, year, shift }, { services: { ElectionService } }) =>
  ElectionService.findMostVoteCandidateInYearByState(year, state, shift)

export const queryResolvers = {
  allCongressmen,
  topVotingState,
  candidateVotesByState,
  mostVotedInYearByState,
  candidatesByRoleAndYear
}

export function congressmanFilterBuilder (filter = {}) {
  const { nameContains } = filter
  const filteredByName = { name: { $regex: `.*${nameContains}.*` } }
  return nameContains ? filteredByName : FIND_ALL
}
