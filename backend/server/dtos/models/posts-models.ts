import { Field, ObjectType } from 'type-graphql';

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
  midSection: boolean;

  @Field()
  gameplay: boolean;

  @Field()
  schedule: string;

  @Field()
  scheduled: string;

  @Field()
  content: string;

  @Field()
  category: string;

  @Field()
  thumb: string;
}
