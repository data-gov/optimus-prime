export const Query = {
  allLinks: async (root, data, {mongo: {Links}}) => {
    return Links.find({}).toArray()
  },
  allExpenses: async (root, data, {mongo: {Expenses}}) => {
    return Expenses.find({}).toArray()
  }
}
