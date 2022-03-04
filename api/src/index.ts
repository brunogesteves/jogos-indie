import express from "express";
import cors from "cors"
import {graphqlHTTP} from "express-graphql"
import { graphqlUploadExpress} from "graphql-upload"

import { context } from "./graphql/context";
import { schema } from "./graphql";



const app = express();
app.use(cors())
app.use(express.json())

app.use(
    "/graphql",
    graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }),
    graphqlHTTP({
      schema,
      context: context,
      graphiql: true,
    }),
  );

app.listen(3001, ()=>{
    console.log("Server running on Port 3001");
    
})
