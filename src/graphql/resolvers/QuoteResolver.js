import Quote from "../../mongoose/model/Quotes.js";


export const resolvers = {
  Query: {
      
    quotes:async() => await Quote.find({}),
    getQuotesByUserId:async(_,{by})=> await Quote.find({by}).populate("by","_id firstName"),
  },
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