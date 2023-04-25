import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';

import { buildSchema } from 'type-graphql';

import { CategoriesResolver } from './Revolvers/categories-resolvers';
import { SlidesResolver } from './Revolvers/slides-resolvers';
import { GameplayResolver } from './Revolvers/gameplay-resolvers';
import { MiddleResolver } from './Revolvers/middle-resolvers';
import { MidSectionResolver } from './Revolvers/midSection-resolvers';
import { SignInResolver } from './Revolvers/signIn-resolvers';
import { PostsResolver } from './Revolvers/posts-resolvers';
import { searchResolver } from './Revolvers/search-resolvers';
import { ImagesResolver } from './Revolvers/images-resolvers';
import { PostResolver } from './Revolvers/post-resolvers';
import { FrontPostResolver } from './Revolvers/name_post-resolvers';
import { RandomPostsResolver } from './Revolvers/random-resolvers';
import { CategoryNameResolver } from './Revolvers/categoryName-resolvers';
import { OptionPostResolver } from './Revolvers/postOptions-resolvers';
import { UploadFileResolver } from './Revolvers/uploadFile-resolvers';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      SlidesResolver,
      MiddleResolver,
      GameplayResolver,
      MidSectionResolver,
      SignInResolver,
      PostsResolver,
      searchResolver,
      ImagesResolver,
      PostResolver,
      FrontPostResolver,
      RandomPostsResolver,
      CategoryNameResolver,
      OptionPostResolver,
      UploadFileResolver,
    ],
  });

  const apolloServer = new ApolloServer({ schema, cache: 'bounded' });
  const app = express();
  app.use(graphqlUploadExpress());
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  });
};
main();
