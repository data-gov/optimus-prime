import mongoose from 'mongoose'
import { parserOptions } from '../../config/mongoose'

const Schema = mongoose.Schema

let SomeModelSchema = new Schema({
  a_string: { type: String, lowercase: true, trim: true },
  a_date: { type: Date, default: Date.now }
})

SomeModelSchema.set('toJSON', parserOptions)
SomeModelSchema.set('toObject', parserOptions)

export default mongoose.model('SomeModel', SomeModelSchema)
