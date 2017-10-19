import { readDotEnvFile } from './dotEnv'
import { connectMongo } from './mongo'

export const initConfigurations = async () => {
  await readDotEnvFile()
  await connectMongo()
}
