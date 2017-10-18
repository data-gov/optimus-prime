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
  }
`

//   val status: List<CongressmanStatus>,
//   val office: Office,
//   val expenses: List<Expense>
