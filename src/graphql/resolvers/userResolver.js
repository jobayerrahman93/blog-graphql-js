import Quote from "../../mongoose/model/Quotes.js";
import User from "../../mongoose/model/User.js";



export const resolvers = {
    Query: {
        users: async() => await User.find({}),
        getUserById:async(_,args)=>await User.findOne({_id:args._id}),
      },
      User:{
        quotes:async(parent)=> {
          const quote = await Quote.find({by:parent._id})
         return quote;
        }
      },
  
  };