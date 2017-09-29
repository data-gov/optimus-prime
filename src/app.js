import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import { initConfigurations } from './config'
import { router } from './router'

initConfigurations()
const app = express()

app.disable('x-powered-by')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())

app.use(router)

export default app
