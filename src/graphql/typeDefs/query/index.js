const query = `
  type Query {
    allCongressmen(filter: CongressmenFilter): [Congressman!]!
    mostVotedCongressmanByState(state: String!): Congressman
    candidatesByRoleAndYear(role: String!, year: Int!): [String]!
  }

  input CongressmenFilter {
    nameContains: String
  }
`

export default query
