import { Arg, Mutation, Resolver } from 'type-graphql';
import { GraphQLUpload } from 'apollo-upload-server';
import { createWriteStream } from 'fs';

import { PrismaClient } from '@prisma/client';
import { FileInput } from '../dtos/inputs/uploadFile-inputs';
import path from 'path';
const prisma = new PrismaClient();

@Resolver()
export class UploadFileResolver {
  @Mutation(() => Boolean)
  async uploadFile(@Arg('input', () => GraphQLUpload) file: FileInput) {
    const { createReadStream } = file;
    console.log('====================================');
    console.log('back', file);
    console.log('====================================');
    try {
      // console.log('oi:', file.path);
      // console.log('oi:', file.size);
      // createReadStream().pipe(
      //   createWriteStream(path.join(__dirname, '/pics', filename))
      // );
      // .on('close', res)
      return true;
    } catch (error) {}

    return true;
  }
}
