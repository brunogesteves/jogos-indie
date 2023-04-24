import { Field, InputType } from 'type-graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class OptionPostInput {
  @Field()
  @MaxLength(30)
  id: string;

  @Field()
  @MaxLength(100)
  option: string;

  @Field()
  info: boolean;
}
