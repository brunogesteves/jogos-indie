import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export const MessagesType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successfull: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
