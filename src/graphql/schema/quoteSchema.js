export const typeDefs =`

type Query {
  quotes: [Quotes]
  getQuotesByUserId(by:ID!):[QuoteWithPopulate]
}
  type Mutation {
    createQuote(name:String!):String
}

type QuoteWithPopulate{
  name:String
  by: quoteDetails
}

type quoteDetails{
  _id:ID
  firstName:String
}

type Quotes {
  by:ID!
  name:String
}
 
 
`