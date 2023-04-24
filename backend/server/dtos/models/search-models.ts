import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SearchModel {
  @Field()
  slug: string;

  @Field()
  thumb: string;

  @Field()
  name: string;

  @Field()
  category: string;
}
