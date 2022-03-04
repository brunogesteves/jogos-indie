import { GraphQLBoolean, GraphQLList, GraphQLString } from "graphql";
import { PostsType } from "../TypeDefs/Posts";
import { context } from "../context";

export const GET_ALL_POSTS_HOME = {
  type: new GraphQLList(PostsType),
  args: {
    answer: { type: GraphQLBoolean },
    field: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { answer, field } = args;
    if (field === "slide") {
      return await context.prisma.post.findMany({
        where: {
          slide: answer,
        },
      });
    } else if (field === "middle") {
      return await context.prisma.post.findMany({
        where: {
          middle: answer,
        },
      });
    } else if (field === "gameplay") {
      return await context.prisma.post.findMany({
        where: {
          gameplay: answer,
        },
      });
    } else if (field === "midSection") {
      const post = await context.prisma.post.findMany({
        where: {
          midSection: answer,
        },
        take: 8,
      });
      function numbers(min: number, max: number): number[] {
        var n = [];
        for (var i = 0; i < 8; i++) {
          n.push(Math.floor(Math.random() * max) + min);
        }
        return n;
      }
      const postPosition = numbers(0, post.length);

      const posts = [
        post[postPosition[0]],
        post[postPosition[1]],
        post[postPosition[2]],
        post[postPosition[3]],
        post[postPosition[4]],
        post[postPosition[5]],
        post[postPosition[6]],
        post[postPosition[7]],
      ];

      return posts;
    }
  },
};







