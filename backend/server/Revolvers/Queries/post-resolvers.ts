import { Arg, Query, Resolver } from "type-graphql";

import { PostsModel } from "../../dtos/models/posts-models";
import { PostInput } from "../../dtos/inputs/post-inputs";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class PostResolver {
  @Query(() => PostsModel)
  async postQuery(@Arg("input") data: PostInput) {
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
