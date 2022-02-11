import { Context } from "../context";

import { GraphQLID, GraphQLString } from "graphql";
import { CategoryType } from "../TypeDefs/Categories";
import { MessagesType } from "../TypeDefs/Messages";

export const CREATE_CATEGORY = {
  type: MessagesType,
  args: {
    name: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: Context) {
    const { name } = args;

    await context.prisma.cats.create({
      data: {
        name: name,
      },
    });
    return { successfull: true };
  },
};

export const DELETE_CATEGORY = {
  type: CategoryType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: Context) {
    const { id } = args;
    return await context.prisma.cats.delete({
      where: {
        id: Number(id),
      },
    });
    
  },
};

