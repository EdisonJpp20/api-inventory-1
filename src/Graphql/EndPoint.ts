import  {graphqlHTTP} from 'express-graphql';
import schema from "./Schema";

const endPoint  =  graphqlHTTP({
    schema : schema,
    // rootValue: null, 
    graphiql : true ,
});

export default endPoint ;