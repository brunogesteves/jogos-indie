import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class PostInput {
  @Field()
  @MaxLength(30)
  id: string;
}

@InputType()
export class OptionPostInput {
  @Field()
  @MaxLength(30)
  id: string;

  @Field()
  @MaxLength(100)
  option: string;

  @Field()
  info: boolean;
}

@InputType()
export class NamePostInput {
  @Field()
  @MaxLength(30)
  name: string;
}

@InputType()
export class PostUpdateCreateInput {
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
  scheduled: boolean;

  @Field()
  content: string;

  @Field()
  category: string;

  @Field()
  thumb: string;
}
