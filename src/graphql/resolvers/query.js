export const Query = {
  allLinks: async (obj, args, context) => {
    const { Links } = context.mongo
    return Links.find({}).toArray()
  },
  allExpenses: async (obj, args, context) => {
    const { Expenses } = context.mongo
    return Expenses.find({}).toArray()
  }
}
