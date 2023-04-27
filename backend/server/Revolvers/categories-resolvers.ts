import { Query, Resolver, Arg, Mutation } from 'type-graphql';

import {
  CategoriesModel,
  CategoryNameModel,
} from '../dtos/models/categories-models';

import { PrismaClient } from '@prisma/client';
import { CategoryNameInput } from '../dtos/inputs/category-input';
const prisma = new PrismaClient();

@Resolver()
export class CategoriesResolver {
  @Query(() => [CategoriesModel])
  async getAllCategories() {
    try {
      let categoryResults = await prisma.cats.findMany({});

      return categoryResults;
    } catch (error) {}
  }

  @Mutation(() => Boolean)
  async createCategory(@Arg('newCategoryName') newCategoryName: string) {
    try {
      let isAddedCategory = await prisma.cats.create({
        data: {
          name: newCategoryName,
        },
      });

      if (isAddedCategory) return true;
    } catch (error) {}
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Arg('deleteCategoryId') id: number) {
    try {
      let isdeletedCategory = await prisma.cats.delete({
        where: {
          id,
        },
      });

      if (isdeletedCategory) return true;
    } catch (error) {}
  }
}

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
