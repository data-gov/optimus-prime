const query = `
  type Query {
    allCongressmen(filter: CongressmenFilter): [Congressman!]!
    mostVotedCongressmanByState(state: String!): Congressman
    candidatesByYear(role: String!, year: Int!): [Congressman!]!
  }

  input CongressmenFilter {
    nameContains: String
  }
`

export default query
