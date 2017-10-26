import { Engine } from 'apollo-engine'

export const startApolloEngine = (app) => {
  const { ENGINE_API_KEY, PORT, NODE_ENV } = process.env

  if (NODE_ENV === 'production') {
    const engine = new Engine({
      engineConfig: {
        apiKey: ENGINE_API_KEY,
        logging: {
          level: 'DEBUG'
        }
      },
      graphqlPort: PORT || 8003,
      endpoint: '/graphql',
      dumpTraffic: true
    }).start()

    app.use(engine.expressMiddleware())
  }
}
