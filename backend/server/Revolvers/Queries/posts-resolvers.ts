import { Query, Resolver } from "type-graphql";

import { PostsModel } from "../../dtos/models/posts-models";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class PostsResolver {
  @Query(() => [PostsModel])
  async getAllPosts() {
    try {
      let allPost = await prisma.post.findMany();
      if (allPost) {
        return allPost;
      }
    } catch (error) {}
  }
}
