import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
        
        return {
          success:true,
          message: 'Signup Successful'
        };
    },

    signIn:async(_,{signInUser})=>{
      const user = await User.findOne({email:signInUser.email});

      if(!user){
        throw new Error('User doesnot exist with that email')
      }

      const matched = await bcrypt.compare(signInUser.password,user.password);

      if(!matched){
        throw new Error('email or password doesnt match')
      }

    const token =  jwt.sign({userId:user._id},process.env.JWT_SECRET);

    return{
      token
    }
    },
  
    }
  };

