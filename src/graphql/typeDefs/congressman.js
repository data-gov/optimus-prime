export const congressman = `
  type Congressman {
    id: ID!
    name: String!
    cpf: String!
    gender: String!
    birthday: String!
    deathDate: String
    schooling: String
    socialMedia: [String!]!
    websiteUrl: String
    birthState: String
    birthCity: String
    expenses: [Expense!]!
    office: Office!
  }
`

//   val status: List<CongressmanStatus>,
