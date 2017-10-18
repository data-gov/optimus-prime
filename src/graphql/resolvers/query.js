export const Query = {
  allExpenses: async (obj, args, context) => {
    const { Expenses } = context.mongo
    return Expenses.find({}).toArray()
  }
}
