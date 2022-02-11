import { Context } from "../context";

import { GraphQLID, GraphQLBoolean, GraphQLString } from "graphql";
import { MessagesType } from "../TypeDefs/Messages";
import { PostsType } from "../TypeDefs/Posts";

export const CREATE_POST = {
  type: PostsType,
  args: {
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    category: { type: GraphQLString },
    slug: { type: GraphQLString },
    scheduled: { type: GraphQLBoolean },
    schedule: { type: GraphQLString },
    slide: { type: GraphQLBoolean },
    middle: { type: GraphQLBoolean },
    gameplay: { type: GraphQLBoolean },
    publicPost: { type: GraphQLBoolean },
    midSection: { type: GraphQLBoolean },
    thumb: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: Context) {
    const {
      name,
      content,
      category,
      slug,
      scheduled,
      schedule,
      slide,
      middle,
      gameplay,
      publicPost,
      midSection,
      thumb,
    } = args;

    // "oi"
    return await context.prisma.post.create({
      data: {
        name,
        content,
        category,
        slug,
        scheduled,
        schedule,
        slide,
        middle,
        gameplay,
        public: publicPost,
        midSection,
        thumb,
      },
    });
  },
};

export const UPDATE_POST = {
  type: MessagesType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    category: { type: GraphQLString },
    slug: { type: GraphQLString },
    slide: { type: GraphQLBoolean },
    middle: { type: GraphQLBoolean },
    gameplay: { type: GraphQLBoolean },
    publicPost: { type: GraphQLBoolean },
    midSection: { type: GraphQLBoolean },
    thumb: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: Context) {
    const {
      id,
      name,
      content,
      category,
      slug,
      slide,
      middle,
      gameplay,
      publicPost,
      midSection,
      thumb,
    } = args;
    const PostId = Number(id);

    return await context.prisma.post.update({
      where: { id: PostId },
      data: {
        name,
        content,
        category,
        slug,
        slide,
        middle,
        gameplay,
        public: publicPost,
        midSection,
        thumb,
      },
    });
  },
};

export const DELETE_POST = {
  type: MessagesType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: Context) {
    const PostId = Number(args.id);
    await context.prisma.post.delete({
      where: { id: PostId },
    });
    return { successfull: true };
  },
};


