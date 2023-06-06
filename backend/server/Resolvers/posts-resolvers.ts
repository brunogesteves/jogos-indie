import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateSavePostModel, PostsModel } from '../dtos/models/posts-models';
import { PrismaClient } from '@prisma/client';
import {
  PostInput,
  NamePostInput,
  OptionPostInput,
  PostUpdateCreateInput,
  DeletePostInput,
  IdPostInput,
} from '../dtos/inputs/post-inputs';
const prisma = new PrismaClient();

@Resolver()
export class PostsResolver {
  @Query(() => [PostsModel])
  async getAllPosts() {
    try {
      let allPosts = await prisma.post.findMany({});
      if (allPosts) {
        return allPosts;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Query(() => PostsModel)
  async getOnePost(@Arg('data') data: NamePostInput) {
    const { slug } = data;

    try {
      let uniquePost = await prisma.post.findFirst({
        where: {
          slug,
        },
      });
      console.log('post: ', uniquePost);

      if (uniquePost) {
        return uniquePost;
      }
    } catch (error) {}
  }

  @Query(() => PostsModel)
  async getOneUpdatePost(@Arg('input') data: IdPostInput) {
    try {
      let uniquePost = await prisma.post.findUnique({
        where: {
          id: Number(data.id),
        },
      });

      if (uniquePost) {
        return uniquePost;
      }
    } catch (error) {}
  }

  @Query(() => [PostsModel])
  async getRandomPosts() {
    try {
      const postsCount = await prisma.post.count();
      const skip = Math.floor(Math.random() * postsCount);
      let randomPosts = await prisma.post.findMany({
        take: 3,
        skip: skip,
      });

      if (randomPosts) {
        return randomPosts;
      }
    } catch (error) {}
  }
}

@Resolver()
export class OptionPostResolver {
  @Mutation(() => Boolean)
  async optionUpdatePost(@Arg('data') data: OptionPostInput) {
    const { id, option, info } = data;

    try {
      let isUpdated = await prisma.post.update({
        where: {
          id: Number(id),
        },
        data: {
          [option]: {
            set: info,
          },
        },
      });
      if (isUpdated) return true;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('data') data: DeletePostInput) {
    const { id } = data;

    try {
      let isUpdated = await prisma.post.delete({
        where: {
          id: Number(id),
        },
      });
      if (isUpdated) return true;
    } catch (error) {
      console.log(error);
    }
  }
}

@Resolver()
export class PostResolver {
  @Query(() => PostsModel)
  async postQuery(@Arg('input') data: PostInput) {
    const { id } = data;

    try {
      let uniquePost = await prisma.post.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (uniquePost) {
        return uniquePost;
      }
    } catch (error) {}
  }
}

@Resolver()
export class CreateSavePostResolver {
  @Mutation(() => CreateSavePostModel)
  async createSavePost(@Arg('input') data: PostUpdateCreateInput) {
    const { id, ...dataInfo } = data;

    try {
      let CreateUpdatePost = await prisma.post.upsert({
        where: { id: Number(id) },
        update: {
          ...dataInfo,
        },
        create: {
          ...dataInfo,
        },
      });
      if (CreateUpdatePost) {
        return { id: CreateUpdatePost.id, success: CreateUpdatePost };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
