import * as path from "path";

import { GraphQLSchema} from "graphql";
import { loadSchemaSync} from "@graphql-tools/load"
import { mergeResolvers} from "@graphql-tools/merge";
import { loadFilesSync} from "@graphql-tools/load-files";
import { IResolvers } from "@graphql-tools/utils/Interfaces";
import {addResolversToSchema} from "@graphql-tools/schema";
import { GraphQLFileLoader} from "@graphql-tools/graphql-file-loader";


const allTypes : GraphQLSchema = loadSchemaSync(
    path.join(__dirname, "../modules/**/*.graphql"),
    {loaders : [new GraphQLFileLoader()]}
);

const allResolvers  = loadFilesSync(
    path.join(__dirname, "../modules/**/resolvers.*")
);

const mergeAllResolvers = mergeResolvers(allResolvers) as IResolvers ; 

const schema = addResolversToSchema({
    schema : allTypes , 
    resolvers : mergeAllResolvers , 
});

export default schema ; 
