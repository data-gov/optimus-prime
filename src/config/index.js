import dotenv from 'dotenv'
import { mongooseConfig } from './mongoose'

export async function initConfigurations () {
  dotenv.config()
  await mongooseConfig(process.env.NODE_ENV)
}
