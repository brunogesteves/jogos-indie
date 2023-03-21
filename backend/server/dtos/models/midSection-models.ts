import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MidSectionModel {
  @Field()
  name: string;

  @Field()
  thumb: string;

  @Field()
  slug: string;
}
