export const typeDefs =`
type Mutation {
  signIn(signInUser:signInInput):Token
    signUp(signUpUser:signUpInput!):successfulSignUp
}

type successfulSignUp{
  success:Boolean
  message:String
}

input signUpInput{
    firstName:String 
    lastName:String
    email:String
    password:String
}

input signInInput{
  email:String
  password:String
}

type Token{
  token:String
}

`