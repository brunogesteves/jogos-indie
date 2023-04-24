import { Query, Resolver } from 'type-graphql';

import { ImagesModel } from '../dtos/models/images-models';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Resolver()
export class ImagesResolver {
  @Query(() => [ImagesModel])
  async getAllImages() {
    try {
      let allImages = await prisma.images.findMany();
      if (allImages) {
        return allImages;
      }
    } catch (error) {}
  }
}
