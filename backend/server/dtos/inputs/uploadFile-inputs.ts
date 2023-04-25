import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class FileInput {
  @Field()
  filename: string;

  @Field()
  mimetype: string;

  @Field()
  encoding: string;
}
