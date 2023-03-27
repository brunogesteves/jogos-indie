import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ImagesModel {
  @Field()
  name: string;
}
