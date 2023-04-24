import { Arg, Mutation, Resolver } from 'type-graphql';

import { OptionPostInput } from '../dtos/inputs/postOptions-inputs';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Resolver()
export class OptionPostResolver {
  @Mutation(() => Boolean)
  async optionUpdatePost(@Arg('data') data: OptionPostInput) {
    const { id, option, info } = data;

    try {
      if (option === 'slide') {
        let isSlideUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            slide: {
              set: true,
            },
          },
        });

        if (isSlideUpdated) return true;
      } else if (option === 'midSection') {
        let isMidSectionnUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            midSection: info,
          },
        });

        if (isMidSectionnUpdated) return true;
      } else if (option === 'gameplay') {
        let isGameplayUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            gameplay: info,
          },
        });
        if (isGameplayUpdated) return true;
      } else if (option === 'public') {
        let isPublicUpdated = await prisma.post.update({
          where: {
            id: Number(id),
          },
          data: {
            public: info,
          },
        });
        if (isPublicUpdated) return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
