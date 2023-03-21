import { Query, Resolver } from "type-graphql";

import { CategoriesModel } from "../../dtos/models/categories-models";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class CategoriesResolver {
  @Query(() => [CategoriesModel])
  async getAllCategories() {
    try {
      let allCats = await prisma.cats.findMany();
      if (allCats) {
        return allCats;
      }
    } catch (error) {}
  }
}
