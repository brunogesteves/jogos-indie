import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { PostsModel } from '../dtos/models/posts-models';

import { PrismaClient } from '@prisma/client';
import {
  PostInput,
  NamePostInput,
  OptionPostInput,
  PostUpdateCreateInput,
} from '../dtos/inputs/post-inputs';
const prisma = new PrismaClient();

@Resolver()
export class PostsResolver {
  @Query(() => [PostsModel])
  async getAllPosts() {
    console.log('allposts');
    try {
      let allPosts = await prisma.post.findMany({});
      if (allPosts) {
        return allPosts;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

@Resolver()
export class FrontPostResolver {
  @Query(() => PostsModel)
  async frontPostQuery(@Arg('input') data: NamePostInput) {
    const { name } = data;

    try {
      let uniquePost = await prisma.post.findFirst({
        where: {
          slug: name,
        },
      });

      if (uniquePost) {
        return uniquePost;
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
      if (option === 'slide') {
        let isSlideUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            slide: {
              set: true,
            },
          },
        });

        if (isSlideUpdated) return true;
      } else if (option === 'midSection') {
        let isMidSectionnUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            midSection: info,
          },
        });

        if (isMidSectionnUpdated) return true;
      } else if (option === 'gameplay') {
        let isGameplayUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            gameplay: info,
          },
        });
        if (isGameplayUpdated) return true;
      } else if (option === 'public') {
        let isPublicUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            public: info,
          },
        });
        if (isPublicUpdated) return true;
      }
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
  @Mutation(() => Boolean)
  async createSavePost(@Arg('input') data: PostUpdateCreateInput) {
    const {
      id,
      name,
      slug,
      slide,
      midSection,
      gameplay,
      schedule,
      scheduled,
      content,
      category,
      thumb,
    } = data;

    try {
      let CreateUpdatePost = await prisma.post.upsert({
        where: { id: Number(id) },
        update: {
          name,
          slug,
          slide,
          midSection,
          gameplay,
          schedule,
          scheduled,
          content,
          category,
          thumb,
        },
        create: {
          name,
          slug,
          slide,
          midSection,
          gameplay,
          schedule,
          scheduled,
          content,
          category,
          thumb,
        },
      });

      if (CreateUpdatePost) {
        return CreateUpdatePost;
      }
    } catch (error) {}
  }
}
