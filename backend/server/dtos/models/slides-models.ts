import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SlidesModel {
  @Field()
  name: string;

  @Field()
  thumb: string;

  @Field()
  slug: string;
}
