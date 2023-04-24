import { Query, Resolver, Arg } from 'type-graphql';

import { CategoryNameModel } from '../dtos/models/categoryName-models';

import { PrismaClient } from '@prisma/client';
import { CategoryNameInput } from '../dtos/inputs/categoryName-input';
const prisma = new PrismaClient();

@Resolver()
export class CategoryNameResolver {
  @Query(() => [CategoryNameModel])
  async categoryName(@Arg('input') data: CategoryNameInput) {
    const { categoryName } = data;

    try {
      let categoryResults = await prisma.post.findMany({
        where: {
          category: categoryName,
        },
        select: {
          slug: true,
          thumb: true,
        },
      });

      return categoryResults;
    } catch (error) {}
  }
}
