import { Query, Resolver } from 'type-graphql';

import { SlidesModel } from '../dtos/models/slides-models';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Resolver()
export class SlidesResolver {
  @Query(() => [SlidesModel])
  async getAllSlides() {
    try {
      let allSlides = await prisma.post.findMany({
        where: {
          slide: true,
        },
      });

      if (allSlides) {
        return allSlides;
      }
    } catch (error) {}
  }
}
