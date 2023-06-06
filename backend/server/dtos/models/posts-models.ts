import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PostsModel {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  content: string;

  @Field()
  category: string;

  @Field()
  slug: string;

  @Field()
  scheduled: boolean;

  @Field()
  schedule: Date;

  @Field()
  slide: boolean;

  @Field()
  middle: boolean;

  @Field()
  gameplay: boolean;

  @Field()
  publicPost: boolean;

  @Field()
  midSection: boolean;

  @Field()
  thumb: string;
}

@ObjectType()
export class CreateSavePostModel {
  @Field()
  id: number;

  @Field()
  success: string;
}
