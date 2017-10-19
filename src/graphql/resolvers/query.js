export const Query = {
  allExpenses: async (obj, args, context) => {
    const { ExpenseService } = context.services
    return ExpenseService.findAllExpenses()
  }
}
