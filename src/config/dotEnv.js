const { config } = require('dotenv');

async function readDotEnvFile() {
  config();
}

module.exports = {
  readDotEnvFile,
};
