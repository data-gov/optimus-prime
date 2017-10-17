export default {
  Query: {
    allLinks: async (root, data, {mongo: {Links}}) => {
      return Links.find({}).toArray()
    }
  },
  Mutation: {
    createLink: async (root, data, {mongo: {Links}}) => {
      const response = await Links.insert(data)
      return Object.assign({id: response.insertedIds[0]}, data)
    }
  },
  Link: {
    id: root => root._id || root.id
  }
}
