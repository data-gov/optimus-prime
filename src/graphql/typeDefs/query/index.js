const query = `
  type Query {
    allCongressmen(filter: CongressmenFilter): [Congressman!]!
  }

  input CongressmenFilter {
    nameContains: String
  }
`

export default query
