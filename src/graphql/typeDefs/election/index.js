const { candidateVotes } = require('./candidateVotes');
const { votes } = require('./votes');

module.exports = {
  candidateVotes: () => [candidateVotes, votes],
};
