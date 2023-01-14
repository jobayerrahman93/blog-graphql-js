import User from "../../mongoose/model/User.js";



export const resolvers = {
    Query: {
        users: async() => await User.find({}),
      
      },
  
  };