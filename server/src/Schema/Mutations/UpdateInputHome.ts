import { Context } from "../context";

import { GraphQLID, GraphQLBoolean, GraphQLString } from "graphql";
import { MessagesType } from "../TypeDefs/Messages";

export const UPDATE_INPUT_HOME = {
  type: MessagesType,
  args: {
    id: { type: GraphQLID },
    input: { type: GraphQLString },
    info: { type: GraphQLBoolean },
  },
  async resolve(parent: any, args: any, context: Context) {
    const { input, info, id } = args;
    if (input === "slide") {
      await context.prisma.post.update({
        where: { id: id },
        data: { slide: info },
      });
    } else if (input === "middle") {
      await context.prisma.post.update({
        where: { id: id },
        data: { middle: info },
      });
    } else if (input === "gameplay") {
      await context.prisma.post.update({
        where: { id: id },
        data: { gameplay: info },
      });
    } else if (input === "publicpost") {
      await context.prisma.post.update({
        where: { id: id },
        data: { public: info },
      });
    }
    return { successfull: true };

  },
};
