import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class PostInput {
  @Field()
  @MaxLength(30)
  id: string;
}

@InputType()
export class DeletePostInput {
  @Field()
  id: number;
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
  slug: string;
}

@InputType()
export class IdPostInput {
  @Field()
  @MaxLength(30)
  id: string;
}

@InputType()
export class PostUpdateCreateInput {
  @Field()
  @MaxLength(30)
  id: string;

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @MaxLength(300000)
  content: string;

  @Field()
  @MaxLength(30)
  category: string;

  @Field()
  @MaxLength(30)
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
  @MaxLength(30)
  thumb: string;
}
