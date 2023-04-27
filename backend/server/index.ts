import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import {
  CategoriesResolver,
  CategoryNameResolver,
} from './Revolvers/categories-resolvers';
import { SlidesResolver } from './Revolvers/slides-resolvers';
import { GameplayResolver } from './Revolvers/gameplay-resolvers';
import { MiddleResolver } from './Revolvers/middle-resolvers';
import { MidSectionResolver } from './Revolvers/midSection-resolvers';
import { SignInResolver } from './Revolvers/signIn-resolvers';
import { searchResolver } from './Revolvers/search-resolvers';
import { ImagesResolver } from './Revolvers/images-resolvers';
import {
  PostResolver,
  FrontPostResolver,
  OptionPostResolver,
  PostsResolver,
  CreateSavePostResolver,
} from './Revolvers/posts-resolvers';
import { RandomPostsResolver } from './Revolvers/random-resolvers';
import { UploadFileResolver } from './Revolvers/uploadFile-resolvers';
import path from 'path';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      CategoryNameResolver,
      SlidesResolver,
      MiddleResolver,
      GameplayResolver,
      MidSectionResolver,
      SignInResolver,
      PostsResolver,
      FrontPostResolver,
      OptionPostResolver,
      PostsResolver,
      CreateSavePostResolver,
      searchResolver,
      ImagesResolver,
      RandomPostsResolver,
      UploadFileResolver,
      PostResolver,
    ],
  });

  const apolloServer = new ApolloServer({ schema, cache: 'bounded' });
  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  });
};
main();
