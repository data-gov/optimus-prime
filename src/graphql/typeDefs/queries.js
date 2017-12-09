export const queries = `
  type Query {
    allCongressmen(filter: CongressmenFilter): [Congressman!]!
    mostVotedCongressmanByState(state: String!): Congressman
    candidatesByRoleAndYear(role: String!, year: Int!): [String]!
    candidateVotesByState(name: String!, state: String!, year: Int!): CandidateVotes
  }

  input CongressmenFilter {
    nameContains: String
  }
`
