export const queries = `
  type Query {
    topVotingState(name: String!, year: Int!, shift: Int): CandidateVotes
    candidatesByRoleAndYear(role: String!, year: Int!): [String]!
    mostVotedInYearByState(state: String!, year: Int!, shift: Int): CandidateVotes
    findCandidateVotesInAYearByNameAndState(name: String!, state: String!, year: Int!): CandidateVotes
    electionWinner(year: Int!): String!
  }
`
