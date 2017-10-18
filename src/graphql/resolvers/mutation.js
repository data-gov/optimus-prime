export const Mutation = {
  createLink: async (root, data, {mongo: {Links}}) => {
    const response = await Links.insert(data)
    return Object.assign({id: response.insertedIds[0]}, data)
  }
}
