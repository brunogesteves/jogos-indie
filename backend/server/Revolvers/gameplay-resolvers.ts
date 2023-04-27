import { Query, Resolver } from 'type-graphql';

import { GameplayModel } from '../dtos/models/gameplay-models';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Resolver()
export class GameplayResolver {
  @Query(() => [GameplayModel])
  async getAllGameplay() {
    try {
      let gameplay = await prisma.post.findMany({
        where: {
          gameplay: true,
        },
      });

      if (gameplay) {
        console.log('ga: ', gameplay);

        return gameplay;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
