import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as dotenv from 'dotenv';
import lodash from 'lodash';
import mongoose from 'mongoose';
import { resolvers as authResolver } from './src/graphql/resolvers/authResolver.js';
import { resolvers as userResolvers } from './src/graphql/resolvers/userResolver.js';
import { typeDefs as authTypes } from './src/graphql/schema/authSchema.js';
import { typeDefs as userTypes } from './src/graphql/schema/userSchema.js';
dotenv.config().config;
console.log(process.env.MONGO_URI);

// mongoose connection start

mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongo_uri);
  
  mongoose.connection.on("connected",()=>{
    console.log('Database connected')
  });
  mongoose.connection.on("error",(err)=>{
    console.log("Connection failed",err);
  });



  const schema = makeExecutableSchema({
    typeDefs:[authTypes,userTypes],
    resolvers:lodash.merge(userResolvers,authResolver),
  });
  
    const server = new ApolloServer({schema});
  
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      
    
    });
  console.log(`🚀  Server ready at: ${url}`);