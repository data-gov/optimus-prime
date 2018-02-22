// TODO: Modularize this
const graphQLTypeDefs = `
  type Query {
    topVotingState(name: String!, year: Int!, shift: Int): CandidateVotes
    candidatesByRoleAndYear(role: String!, year: Int!): [String]!
    mostVotedInYearByState(state: String!, year: Int!, shift: Int): CandidateVotes
    findCandidateVotesInAYearByNameAndState(name: String!, state: String!, year: Int!): CandidateVotes
    electionWinner(year: Int!): String!
  }
  type CandidateVotes {
    votes: Votes!
    name: String!
    state: String!
    year: Int!
  }
  type Votes {
    first: Int!
    second: Int!
    total: Int!
  }
`;

module.exports = {
  typeDefs: graphQLTypeDefs,
};
