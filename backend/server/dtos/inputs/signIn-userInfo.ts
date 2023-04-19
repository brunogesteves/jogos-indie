import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInfoInput {
  @Field()
  @MaxLength(1000)
  token: string;
}
