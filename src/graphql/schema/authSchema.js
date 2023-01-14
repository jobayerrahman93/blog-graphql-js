export const typeDefs =`
type Mutation {
   
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

`