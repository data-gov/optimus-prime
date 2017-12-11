export const queries = `
  type Query {
    mostVotedCongressmanByState(state: String!): Congressman
    topVotingState(name: String!, year: Int!, shift: Int): CandidateVotes
    allCongressmen(filter: CongressmenFilter): [Congressman!]!
    candidatesByRoleAndYear(role: String!, year: Int!): [String]!
    mostVotedInYearByState(state: String!, year: Int!, shift: Int): CandidateVotes
    findCandidateVotesInAYearByNameAndState(name: String!, state: String!, year: Int!): CandidateVotes
  }

  input CongressmenFilter {
    nameContains: String
  }
`
