import { MaxLength } from 'class-validator';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SignInModel {
  // @Field()
  // id: number;

  @Field()
  token: string;

  @Field()
  auth: boolean;

  @Field()
  @MaxLength(30)
  message: string;
}
