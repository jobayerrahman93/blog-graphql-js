export const typeDefs=`
type Query {
    users: [User]
  }

  type User{
    _id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quotes]
  }
  type Quotes {
    by:ID!
    name:String
  }
`