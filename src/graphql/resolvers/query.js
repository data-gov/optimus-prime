const FIND_ALL = {}

export const Query = {
  allCongressmen: async (obj, args, context) => {
    const { CongressmenService } = context.services
    const filter = congressmanFilterBuilder(args.filter)
    return CongressmenService.findAllCongressmen(filter)
  },
  mostVotedCongressmanByState: async (obj, args, context) => {
    const { ElectionService } = context.services
    return ElectionService.findMostVotedDeputyByState(args.state)
  },
  candidatesByYear: async (obj, args, context) => {
    const { MockedDataService } = context.services
    return MockedDataService.findCandidatesByRoleAndYear(args.role, args.year)
  }
}

export function congressmanFilterBuilder (filter = {}) {
  const { nameContains } = filter

  if (filter.nameContains) {
    return { name: { $regex: `.*${nameContains}.*` } }
  } else {
    return FIND_ALL
  }
}
