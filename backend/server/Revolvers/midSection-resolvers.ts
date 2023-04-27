import { Query, Resolver } from 'type-graphql';

import { MidSectionModel } from '../dtos/models/midSection-models';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Resolver()
export class MidSectionResolver {
  @Query(() => [MidSectionModel])
  async getMidSection() {
    try {
      let midSection = await prisma.post.findMany({
        where: {
          midSection: true,
        },
      });

      if (midSection) {
        return midSection;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
