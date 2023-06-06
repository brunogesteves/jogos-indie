import { Query, Resolver } from 'type-graphql';

import { MiddleModel } from '../dtos/models/middle-models';

import { PrismaClient } from '@prisma/client';
import { GameplayModel } from '../dtos/models/gameplay-models';
import { MidSectionModel } from '../dtos/models/midSection-models';
import { SlidesModel } from '../dtos/models/slides-models';
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

  @Query(() => [GameplayModel])
  async getAllGameplay() {
    try {
      let gameplay = await prisma.post.findMany({
        where: {
          gameplay: true,
        },
      });

      if (gameplay) {
        return gameplay;
      }
    } catch (error) {
      console.log(error);
    }
  }

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
