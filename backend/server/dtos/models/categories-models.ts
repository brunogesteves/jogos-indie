import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CategoriesModel {
  @Field()
  name: string;
}
