import { Query, Resolver } from 'type-graphql';

import { MiddleModel } from '../dtos/models/middle-models';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Resolver()
export class MiddleResolver {
  @Query(() => [MiddleModel])
  async getAllMiddle() {
    try {
      let getAllMiddle = await prisma.post.findMany({
        where: {
          middle: true,
        },
      });

      if (getAllMiddle) {
        return getAllMiddle;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
