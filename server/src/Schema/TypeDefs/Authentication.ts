import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export const AuthenticationType = new GraphQLObjectType({
  name: "Authentication",
  fields: () => ({
    token: { type: GraphQLString },
    refresh: { type: GraphQLString },
    successfull: { type: GraphQLString },
    username: { type: GraphQLString },
  }),
});
