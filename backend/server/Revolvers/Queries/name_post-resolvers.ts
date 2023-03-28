import { Arg, Query, Resolver } from "type-graphql";

import { PostsModel } from "../../dtos/models/posts-models";
import { NamePostInput } from "../../dtos/inputs/name_post-inputs";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class FrontPostResolver {
  @Query(() => PostsModel)
  async frontPostQuery(@Arg("input") data: NamePostInput) {
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
