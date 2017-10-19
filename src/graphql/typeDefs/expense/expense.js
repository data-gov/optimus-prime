export const expense = `
  type Expense {
    id: ID!
    refundNumber: Int!
    glossValue: Int!
    year: Int!
    month: Int!
    lotId: Int!
    parcel: Int!
    kind: String!
    netValue: Float!
    provider: Provider!
    receipt: Receipt!
  }
`
