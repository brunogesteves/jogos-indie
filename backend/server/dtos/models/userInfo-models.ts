import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserInfoModel {
  @Field()
  name: string;

  @Field()
  email: string;
}
