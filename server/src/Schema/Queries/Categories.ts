import { GraphQLList } from "graphql";
import { CategoryType } from "../TypeDefs/Categories";
import { context } from "../context";

export const GET_ALL_CATEGORIES = {
  type: new GraphQLList(CategoryType),
  async resolve() {
    return await context.prisma.cats.findMany({
      orderBy: {
        name: "asc",
      },
    });
  },
};
