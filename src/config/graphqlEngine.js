import { Engine } from 'apollo-engine'

export const initGraphEngine = () => {
  const engine = new Engine({
    engineConfig: {
      apiKey: process.env.ENGINE_API_KEY,
      logging: {
        level: 'DEBUG'
      }
    },
    graphqlPort: process.env.PORT || 8003,
    endpoint: '/graphql',
    dumpTraffic: true
  })

  engine.start()

  return engine
}
