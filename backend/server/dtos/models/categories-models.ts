import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CategoriesModel {
  @Field()
  name: string;

  @Field()
  id: number;
}

@ObjectType()
export class CreateCategoryModel {
  @Field()
  status: boolean;
}
