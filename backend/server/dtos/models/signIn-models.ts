import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SignInModel {
  // @Field()
  // id: number;

  @Field()
  token: string;

  @Field()
  auth: boolean;

  // @Field()
  // password: string;
}
