import logger from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import { startApolloEngine } from './config/apolloEngine';
import { initConfigurations } from './config';
import { router } from './routes';

export const initializeApp = async port => {
  await initConfigurations();
  const app = express();
  await startApolloEngine(app);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(compression());
  app.use(logger('dev'));
  app.use(helmet());
  app.use(router);

  app.set('port', port);

  return app;
};
