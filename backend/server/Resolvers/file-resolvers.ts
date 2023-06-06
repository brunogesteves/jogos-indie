import { Arg, Mutation, Resolver } from 'type-graphql';
import { converBase64ToImage } from 'convert-base64-to-image';
import fs from 'fs';

import { PrismaClient } from '@prisma/client';
import { DeleteFileInput, FileInput } from '../dtos/inputs/file-inputs';
const prisma = new PrismaClient();

@Resolver()
export class UploadFileResolver {
  @Mutation(() => Boolean)
  async uploadFile(@Arg('input') file: FileInput) {
    const { base64, name, saveToDB } = file;

    const pathToImage = `./files/${name}`;

    try {
      if (saveToDB) {
        const isImageAdded = await prisma.images.create({
          data: {
            name,
          },
        });
        if (isImageAdded) {
          converBase64ToImage(base64, pathToImage);
          return true;
        }
      } else {
        converBase64ToImage(base64, pathToImage);
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Boolean)
  async deleteImage(@Arg('input') file: DeleteFileInput) {
    const { id } = file;

    try {
      const imageDeleted = await prisma.images.delete({
        where: {
          id,
        },
        select: {
          name: true,
        },
      });
      if (imageDeleted) {
        fs.unlinkSync(`./files/${imageDeleted}`);

        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
