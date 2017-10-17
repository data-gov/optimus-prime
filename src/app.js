import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { graphqlExpress } from 'apollo-server-express'

import schema from './graphql/schemas'

import { initConfigurations, mongoConnection } from './config'

import { router } from './routes'

export const initializeApp = async () => {
  const app = express()
  await initConfigurations()
  const mongo = await mongoConnection()
  const graphqlConfig = {
    context: { mongo },
    schema
  }
  app.use('/graphql', bodyParser.json(), graphqlExpress(graphqlConfig))

  app.disable('x-powered-by')
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(helmet())

  app.use(router)
  return app
}
