import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import {
  CategoriesResolver,
  CategoryNameResolver,
} from './Resolvers/categories-resolvers';
import { MiddleResolver } from './Resolvers/home-resolvers';
import { SignInResolver } from './Resolvers/signIn-resolvers';
import { searchResolver } from './Resolvers/search-resolvers';
import { ImagesResolver } from './Resolvers/images-resolvers';
import {
  PostResolver,
  OptionPostResolver,
  PostsResolver,
  CreateSavePostResolver,
} from './Resolvers/posts-resolvers';
import { UploadFileResolver } from './Resolvers/file-resolvers';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      CategoryNameResolver,
      MiddleResolver,
      SignInResolver,
      PostsResolver,
      OptionPostResolver,
      PostsResolver,
      CreateSavePostResolver,
      searchResolver,
      ImagesResolver,
      UploadFileResolver,
      PostResolver,
    ],
  });

  const apolloServer = new ApolloServer({ schema, cache: 'bounded' });
  const app = express();
  app.use('/files', express.static('files'));

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  });
};
main();
