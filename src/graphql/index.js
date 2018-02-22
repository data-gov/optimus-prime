const { GraphQLServer } = require('graphql-yoga');
const helmet = require('helmet');
const logger = require('morgan');

const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefs');
const { context } = require('./context');

const isRunningOnProd = process.env.NODE_ENV === 'production';

console.log('typeDefs', typeDefs);

const graphQLServer = new GraphQLServer({
  typeDefs,
  resolvers,
  context,
});

const options = {
  tracing: !isRunningOnProd,
  debug: !isRunningOnProd,
  cacheControl: true,
};

graphQLServer.express.disable('x-powered-by');
graphQLServer.express.use(logger('dev'));
graphQLServer.express.use(helmet());

const startServer = async () => {
  await graphQLServer.start(options);
  return graphQLServer;
};

module.exports = { startServer };
