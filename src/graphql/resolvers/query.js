export const Query = {
  allCongressmen: async (obj, args, context) => {
    const { CongressmenService } = context.services
    return CongressmenService.findAllCongressmen()
  }
}
