import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MiddleModel {
  @Field()
  name: string;

  @Field()
  thumb: string;

  @Field()
  slug: string;
}
