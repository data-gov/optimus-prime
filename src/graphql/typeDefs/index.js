export const typeDefs = `
  type Link {
    id: ID!
    url: String!
    description: String!
  }

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
  }

  type Mutation {
    createLink(url: String!, description: String!): Link
  }
  
  type Query {
    allLinks: [Link!]!
    allExpenses: [Expense!]!
  }
`
