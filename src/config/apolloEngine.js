import debug from 'debug';
import { Engine } from 'apollo-engine';
import { getPort, OPTIMUS_PRIME_DEBUG } from './constants';

const log = debug(OPTIMUS_PRIME_DEBUG);

export const startApolloEngine = app => {
  const { ENGINE_API_KEY, NODE_ENV } = process.env;
  const port = getPort();

  log(`Starting apollo engine on port ${port}`);

  if (NODE_ENV === 'production') {
    const engine = new Engine({
      engineConfig: {
        apiKey: ENGINE_API_KEY,
        logging: {
          level: 'DEBUG',
        },
      },
      graphqlPort: port,
      endpoint: '/graphql',
      dumpTraffic: true,
    });
    engine.start();
    app.use(engine.expressMiddleware());
  }
};
