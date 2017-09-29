import mongoose from 'mongoose'

export async function connectMongo (url, options) {
  await mongoose.connect(url, options)
  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))
}

export function closeConnection () {
  mongoose.connection.close()
}
