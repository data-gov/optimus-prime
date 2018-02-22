const { queries } = require('./query');

const graphQLResolvers = {
  Query: queries,
};

module.exports = {
  resolvers: graphQLResolvers,
};
