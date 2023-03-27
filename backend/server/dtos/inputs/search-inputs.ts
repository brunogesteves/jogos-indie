import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class SearchInput {
  @Field()
  @MaxLength(30)
  term: string;
}
