import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PostsModel {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  id: number;

  @Field()
  slide: boolean;

  @Field()
  middle: boolean;

  @Field()
  gameplay: boolean;

  @Field()
  public: boolean;

  @Field()
  schedule: string;
}
