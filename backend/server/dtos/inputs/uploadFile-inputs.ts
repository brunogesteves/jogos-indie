import { Stream } from 'stream';

import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

export interface FileInput {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}
