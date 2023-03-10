import "reflect-metadata";
// import http from "http";
// import { json } from "body-parser";
import { ApolloServer } from "apollo-server-express";
import express from "express";
// import { expressMiddleware } from "@apollo/server/express4";

import { buildSchema } from "type-graphql";
// // import { graphqlHTTP } from "express-graphql";
// import cors from "cors";

import { CategoriesResolver } from "./Resvolvers/categories-resolvers";

// const main = async () => {
//   const app = express();

//   const httpServer = http.createServer(app);

//   // const schema = await buildSchema({
//   //   resolvers: [c],
//   // });
// const r = CategoriesResolver
//   const server = new ApolloServer({

//     resolvers: r,
//     cache: "bounded",
//     csrfPrevention: true,
//   });
//   await server.start();

//   // app.use(
//   //   "/graphql",
//   //   graphqlHTTP({
//   //     schema,
//   //     graphiql: true,
//   //   })
//   // );

//   app.use(
//     "/graphql",
//     cors<cors.CorsRequest>({
//       origin: [
//         "https://ji-server.onrender.com:4000",
//         "https://ji-server.onrender.com:4000/graphql",
//       ],
//     }),

//     json(),
//     expressMiddleware(server)
//   );

//   await new Promise<void>((resolve) => {
//     httpServer.listen({ port: 4000 }, resolve);
//   });
//   console.log(`🚀 Server ready at port 40000`);
// };

// main();

const main = async () => {
  const schema = await buildSchema({
    resolvers: [CategoriesResolver],
  });

  const apolloServer = new ApolloServer({ schema, cache: "bounded" });
  const app = express();
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  });
};
main();
