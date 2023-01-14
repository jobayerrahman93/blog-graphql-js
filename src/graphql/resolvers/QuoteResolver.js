import Quote from "../../mongoose/model/Quotes.js";


export const resolvers = {

    Mutation:{

    createQuote:async(_,{name},{userId})=>{

      if(!userId){
        throw new Error ('You must be logged in')
      }
      const newQuote = new Quote({
        name,
        by:userId
      });

    await newQuote.save();
      return('Quote created succesfully')

    }
    }
  };