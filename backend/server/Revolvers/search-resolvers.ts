import { Arg, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { SearchInput } from '../dtos/inputs/search-inputs';
import { SearchModel } from '../dtos/models/search-models';

const prisma = new PrismaClient();

@Resolver()
export class searchResolver {
  @Query(() => [SearchModel])
  async searchQuery(@Arg('input') data: SearchInput) {
    const { term } = data;

    try {
      let searchResults = await prisma.post.findMany({
        where: {
          name: {
            contains: term,
          },
        },
        select: {
          slug: true,
          thumb: true,
          name: true,
          category: true,
        },
      });

      return searchResults;
    } catch (error) {}
  }
}
