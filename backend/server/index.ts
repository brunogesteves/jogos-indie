import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";

import { buildSchema } from "type-graphql";

import { CategoriesResolver } from "./Revolvers/Queries/categories-resolvers";
import { SlidesResolver } from "./Revolvers/Queries/slides-resolvers";
import { GameplayResolver } from "./Revolvers/Queries/gameplay-resolvers";
import { MiddleResolver } from "./Revolvers/Queries/middle-resolvers";
import { MidSectionResolver } from "./Revolvers/Queries/midSection-resolvers";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      SlidesResolver,
      MiddleResolver,
      GameplayResolver,
      MidSectionResolver,
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
