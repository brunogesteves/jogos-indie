import { Field, InputType } from 'type-graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class FileInput {
  @Field(() => String)
  saveToDB!: boolean;

  @Field(() => String)
  @MaxLength(300000)
  base64!: string;

  @Field(() => String)
  @MaxLength(30)
  name!: string;
}

@InputType()
export class DeleteFileInput {
  @Field(() => Number)
  id!: number;
}
