import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CategoryType = new GraphQLObjectType({
  name: "Categories",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
