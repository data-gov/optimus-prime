const { services } = require('../../services');

const graphQLContext = { services };

module.exports = {
  context: graphQLContext,
};
