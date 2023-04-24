import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CategoryNameInput {
  @Field()
  @MaxLength(30)
  categoryName: string;
}
