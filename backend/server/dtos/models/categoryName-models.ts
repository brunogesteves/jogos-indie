import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CategoryNameModel {
  @Field()
  slug: string;

  @Field()
  thumb: string;
}
