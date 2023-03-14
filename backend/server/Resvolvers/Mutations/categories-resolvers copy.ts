import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { CategoriesModel } from "../../dtos/models/categories-models";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Resolver()
export class CategoriesResolver {
  @Query(() => [CategoriesModel])
  async getAllCategories() {
    try {
      console.log(1111);
      let allCats = await prisma.cats.findMany();
      if (allCats) {
        return allCats;
      }
    } catch (error) {}
  }

  // @Mutation(() => Boolean)
  // async createAppointment(@Arg("data") data: CreateAppointmentInput) {
  //   const appointment = {
  //     startsAt: data.startsAt,
  //     endsAt: data.endsAt,
  //   };

  //   return appointment;
  // }
}
