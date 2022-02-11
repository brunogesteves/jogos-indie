import { GraphQLList, GraphQLString, GraphQLID } from "graphql";
import { FilesType } from "../TypeDefs/Files";
import { context } from "../context";

export const GET_ALL_IMAGES = {
  type: new GraphQLList(FilesType),

  async resolve(parent: any, args: any) {
    return await context.prisma.images.findMany();
  },
};
