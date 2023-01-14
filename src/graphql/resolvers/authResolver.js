import bcrypt from 'bcryptjs';

import User from '../../mongoose/model/User.js';


export const resolvers = {
    Mutation:{
    signUp:async(_,{signUpUser})=>{

     const user = await User.findOne({email:signUpUser.email});
     if(user){
       throw new Error("User already Exist")
     }
      
        const hashedPassword = await bcrypt.hash(signUpUser.password,12);
        const newUser = new User({
          ...signUpUser,
          password:hashedPassword
        });

        const result = await newUser.save();
        console.log(result);
        return {
          success:true,
          message: 'Signup Successful'
        };
    },

   
  
    }
  };

