const { startApolloEngine } = require('./config/apolloEngine');
const { initConfigurations } = require('./config');
const { port } = require('./config/serverPort');
const { startServer } = require('./graphql');

const start = async () => {
  await initConfigurations();
  const server = await startServer();
  startApolloEngine(server);
};

start()
  .then(() => console.log(`Server is running on http://localhost:${port}`))
  .catch(err => console.log('failed: ', err));
