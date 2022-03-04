import { Context } from "../context";
import { GraphQLID, GraphQLScalarType, GraphQLList } from "graphql";
import { FilesType, UploadType } from "../TypeDefs/Files";
import { MessagesType } from "../TypeDefs/Messages";
import path from "path";
import fs from "fs";

interface IFormParams {
  file: any;
}

export const DELETE_IMAGE = {
  type: MessagesType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any, context: Context) {
    const { id } = args;
    const ImageId = Number(id);
    await context.prisma.images.deleteMany({
      where: {
        id: ImageId,
      },
    });
    return { successfull: true };
  },
};

export const FILE_UPLOAD: any = {
  type: FilesType,
  args: {
    file: { type: UploadType },
  },

  async resolve(parent: any, args: IFormParams, context: any) {
    const { createReadStream, filename, mimetype } = await args.file.file;

    const stream = createReadStream();
    const pathName = path.join(__dirname, "../../../public/images/" + filename);

    await stream.pipe(fs.createWriteStream(pathName));
    return { successfull: true };
  },
};
