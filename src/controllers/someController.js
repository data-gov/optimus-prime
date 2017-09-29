import { createSomeObject, findAllSomeObject } from '../services/someService'

export const create = (req, res) => {
  createSomeObject('Bla bla bla')
  res.status(200).json({message: 'Foobar created'})
}

export const findAll = async (req, res) => {
  const listOfSomeObject = await findAllSomeObject()
  res.status(200).json(listOfSomeObject)
}
