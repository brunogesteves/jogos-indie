import { GraphQLList, GraphQLString, GraphQLID } from "graphql";
import { PostsType } from "../TypeDefs/Posts";
import { context } from "../context";

export const GET_POST_INFO = {
  type: new GraphQLList(PostsType),
  args: {
    slug: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { slug } = args;
    return await context.prisma.post.findMany({
      where: {
        slug,
      },
    });
  },
};

export const GET_ADMIN_POST_INFO = {
  type: new GraphQLList(PostsType),
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const PostId = Number(args.id);

    return await context.prisma.post.findMany({
      where: {
        id: PostId,
      },
    });
  },
};

export const GET_LIST_POSTS = {
  type: new GraphQLList(PostsType),
  async resolve(parent: any, args: any) {
    return await context.prisma.post.findMany();
  },
};

export const SEARCH_POSTS = {
  type: new GraphQLList(PostsType),
  args: {
    search: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { search } = args;

    return await context.prisma.post.findMany({
      where: { name: { contains: args.search } },
    });
  },
};

export const GET_SIDEBAR = {
  type: new GraphQLList(PostsType), 
  async resolve(parent: any, args: any) {
      const post = await context.prisma.post.findMany({
      
        take: 3,
      });
      function numbers(min: number, max: number): number[] {
        var n = [];
        for (var i = 0; i < 3; i++) {
          n.push(Math.floor(Math.random() * max) + min);
        }
        return n;
      }
      const postPosition = numbers(0, post.length);

      const posts = [
        post[postPosition[0]],
        post[postPosition[1]],
        post[postPosition[2]],        
      ];

      return posts;
  },
};

export const GET_POSTS_FROM_CATEGORY = {
  type: new GraphQLList(PostsType), 
  args: {
    nameCategory: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
      return await context.prisma.post.findMany({
        where:{
          category: args.nameCategory
        }
      });      
  },
};
