const { MongoClient } = require('mongodb');

let mongo;

const getMongoConnection = async () => mongo || connectMongo();

const connectMongo = async () => {
  mongo = await MongoClient.connect(process.env.MONGO_URL);
};

module.exports = {
  getMongoConnection,
};
