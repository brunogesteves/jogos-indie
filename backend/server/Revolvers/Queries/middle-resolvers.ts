import { Query, Resolver } from "type-graphql";

import { MiddleModel } from "../../dtos/models/middle-models";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class MiddleResolver {
  @Query(() => [MiddleModel])
  async getAllMiddle() {
    try {
      let allMiddle = await prisma.post.findMany({
        where: {
          middle: true,
        },
      });

      if (allMiddle) {
        return allMiddle;
      }
    } catch (error) {}
  }
}
