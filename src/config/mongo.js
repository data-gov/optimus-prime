import debug from 'debug';
import { Logger, MongoClient } from 'mongodb';
import { OPTIMUS_PRIME_DEBUG } from './constants';

let mongo;
const logger = debug(OPTIMUS_PRIME_DEBUG);

export const getMongoConnection = async () => mongo || connectMongo();

export const connectMongo = async () => {
  mongo = await MongoClient.connect(process.env.MONGO_URL);
  setupLogger();
};

const setupLogger = () => {
  let logCount = 0;
  Logger.setCurrentLogger(msg => {
    logger(`MONGO DB REQUEST ${++logCount}:`);
    logger(msg);
  });
  Logger.setLevel('debug');
  Logger.filter('class', ['Cursor']);
};
