import { Query, Resolver } from "type-graphql";

import { PostsModel } from "../../dtos/models/posts-models";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class RandomPostsResolver {
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
