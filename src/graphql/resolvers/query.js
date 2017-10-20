const FIND_ALL = {}

export const Query = {
  allCongressmen: async (obj, args, context) => {
    const { CongressmenService } = context.services
    const filter = congressmanFilterBuilder(args.filter)
    return CongressmenService.findAllCongressmen(filter)
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
