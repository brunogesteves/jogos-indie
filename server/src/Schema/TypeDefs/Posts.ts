import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export const PostsType = new GraphQLObjectType({
  name: "Posts",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    category: { type: GraphQLString },
    slug: { type: GraphQLString },
    scheduled: { type: GraphQLBoolean },
    schedule: { type: GraphQLString },
    slide: { type: GraphQLBoolean },
    middle: { type: GraphQLBoolean },
    gameplay: { type: GraphQLBoolean },
    public: { type: GraphQLBoolean },
    midSection: { type: GraphQLBoolean },
    thumb: { type: GraphQLString },
  }),
});
