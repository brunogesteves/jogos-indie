import { Arg, Mutation, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { FileInput } from '../dtos/inputs/uploadFile-inputs';
const prisma = new PrismaClient();

@Resolver()
export class UploadFileResolver {
  @Mutation(() => Boolean)
  async uploadFile(@Arg('file') file: FileInput) {
    const { filename, mimetype, encoding } = file;
    console.log(file);

    try {
      const out = require('fs').createWriteStream('local-file-output.txt');
      if (out) return true;
    } catch (error) {}
  }
}
