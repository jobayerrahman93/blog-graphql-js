export const typeDefs =`

type Query {
  quotes: [Quotes]
}
  type Mutation {
    createQuote(name:String!):String
}

type Quotes {
  by:ID!
  name:String
}
 
 
`