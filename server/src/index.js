import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { context } from "./Schema/context";
const { graphqlUploadExpress } = require("graphql-upload");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }),
  graphqlHTTP({
    schema,
    context: context,
    graphiql: true,
  }),
);

app.get("/", (req, res) => {
  res.send("pagina de servidor");
});

app.listen(3001, () => {
  console.log("SERVER RUNNING ON PORT 3001");
});
