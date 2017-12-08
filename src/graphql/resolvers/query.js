const FIND_ALL = {}

export const Query = {
  allCongressmen: async (obj, args, context) => {
    const { CongressmenService } = context.services
    const filter = congressmanFilterBuilder(args.filter)
    return CongressmenService.findAllCongressmen(filter)
  },
  candidatesByRoleAndYear: async (obj, args, context) => {
    const { ElectionService } = context.services
    const { role, year } = args
    return ElectionService.findCandidatesByRoleAndYear(role, year)
  },
  candidateVotesByState: async (obj, args, context) => {
    const { ElectionService } = context.services
    const { name, state, year } = args
    return ElectionService.findCandidateVotesInAYearByNameAndState(name, state, year)
  }
}

export function congressmanFilterBuilder (filter = {}) {
  const { nameContains } = filter
  const filteredByName = { name: { $regex: `.*${nameContains}.*` } }
  return nameContains ? filteredByName : FIND_ALL
}
