const { Engine } = require('apollo-engine');
const { port } = require('./serverPort');
const compression = require('compression');

const startApolloEngine = server => {
  const { ENGINE_API_KEY, NODE_ENV } = process.env;

  if (NODE_ENV === 'production') {
    const engine = new Engine({
      engineConfig: { apiKey: ENGINE_API_KEY },
      endpoint: '/',
      graphqlPort: port,
    });

    engine.start();

    server.express.use(compression());
    server.express.use(engine.expressMiddleware());
  }
};

module.exports = {
  startApolloEngine,
};
