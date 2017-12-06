import ElectionService from '../../services/election'

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
  candidatesByRoleAndYear: async (obj, args, context) => {
    const { ElectionService } = context.services
    return ElectionService.findCandidatesByRoleAndYear(args.role, args.year)
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
