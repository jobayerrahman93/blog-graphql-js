import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { mongo_uri } from './config.js';




// mongoose connection start

mongoose.connect(mongo_uri);
  
  mongoose.connection.on("connected",()=>{
    console.log('Database connected')
  });
  mongoose.connection.on("error",(err)=>{
    console.log("Connection failed",err);
  });

const typeDefs = `
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  const resolvers = {
    Query: {
      books: () => books,
    },
  };



const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);