import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class GameplayModel {
  @Field()
  name: string;

  @Field()
  thumb: string;

  @Field()
  slug: string;
}
