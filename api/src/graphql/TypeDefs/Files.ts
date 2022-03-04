import { GraphQLID, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";

export const FilesType = new GraphQLObjectType({
  name: "Files",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    // filename: { type: GraphQLString },
    // mimetype: { type: GraphQLString },
    // encoding: { type: GraphQLString },
    successfull: { type: GraphQLString },
  }),
});

export const UploadType = new GraphQLScalarType({
  name: "Uploads",
  serialize: (file: any) => file,
  parseValue: (file: any) => file,
  parseLiteral(file) {
    return file;
  },
});
