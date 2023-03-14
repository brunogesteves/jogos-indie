import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";

import { buildSchema } from "type-graphql";

import { CategoriesResolver } from "./Resvolvers/Queries/categories-resolvers";
import { SlidesResolver } from "./Resvolvers/Queries/slides-resolvers";
import { GameplayResolver } from "./Resvolvers/Queries/gameplay-resolvers";
import { MiddleResolver } from "./Resvolvers/Queries/middle-resolvers";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      SlidesResolver,
      MiddleResolver,
      GameplayResolver,
    ],
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
