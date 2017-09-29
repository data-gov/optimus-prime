import SomeModel from '../mongoose/models/someModel'

const ALL = {}

export async function createSomeObject (word) {
  let awesomeInstance = new SomeModel({a_string: word})
  await awesomeInstance.save()
}

export async function findAllSomeObject () {
  return SomeModel.find(ALL)
}
