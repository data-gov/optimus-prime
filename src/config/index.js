const { getMongoConnection } = require('./mongo');
const { readDotEnvFile } = require('./dotEnv');

const initConfigurations = async () => {
  await readDotEnvFile();
  await getMongoConnection();
};

module.exports = {
  initConfigurations,
};
