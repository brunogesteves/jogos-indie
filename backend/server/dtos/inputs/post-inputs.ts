import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class PostInput {
  @Field()
  @MaxLength(30)
  id: string;
}
