import { Query, Resolver } from "type-graphql";

import { GameplayModel } from "../../dtos/models/gameplay-models";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class GameplayResolver {
  @Query(() => [GameplayModel])
  async getAllGameplay() {
    try {
      console.log(1111);
      let allGameplay = await prisma.post.findMany({
        where: {
          gameplay: true,
        },
      });

      if (allGameplay) {
        return allGameplay;
      }
    } catch (error) {}
  }
}
