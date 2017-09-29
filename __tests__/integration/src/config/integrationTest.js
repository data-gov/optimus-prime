import dotenv from 'dotenv'
import { mongooseConfig } from '../../../../src/config/mongoose'
import { closeConnection } from '../../../../src/mongoose'

dotenv.config()

export const connectDB = async () => {
  await mongooseConfig('integration-test')
}

export const closeDBConnection = () => {
  closeConnection()
}
