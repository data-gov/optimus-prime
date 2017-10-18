import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import { readDotEnvFile } from './config/dotEnv'
import { getGraphqlConfig } from './config/graphql'
import { router } from './routes'

export const initializeApp = async () => {
  await readDotEnvFile()
  const graphqlConfig = await getGraphqlConfig()
  const app = express()

  app.use('/graphql', bodyParser.json(), graphqlConfig)

  app.disable('x-powered-by')
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(helmet())

  app.use(router)
  return app
}
