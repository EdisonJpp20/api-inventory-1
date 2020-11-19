import express from "express";
import endPoint from "./Graphql/EndPoint";
import cors from "cors";
import bodyParser from "body-parser";

export default function startServer(){

    const app = express();
    app.use(express.json({limit : '50mb'}));
    app.use(bodyParser.urlencoded({ extended: true,  limit : '50mb'})); 
    app.use(cors());
    
    app.use('/graphql' ,endPoint);
    
        return app ; 
};

