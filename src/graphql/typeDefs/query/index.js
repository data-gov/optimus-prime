const query = `
  type Query {
    allCongressmen(filter: CongressmenFilter): [Congressman!]!
    mostVotedCongressmanByState(state: String!): Congressman
  }

  input CongressmenFilter {
    nameContains: String
  }
`

export default query
