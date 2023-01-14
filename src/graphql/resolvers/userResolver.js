import User from "../../mongoose/model/User.js";



export const resolvers = {
    Query: {
        users: async() => await User.find({}),
        getUserById:async(_,args)=>await User.findOne({_id:args._id}),
      },
  
  };