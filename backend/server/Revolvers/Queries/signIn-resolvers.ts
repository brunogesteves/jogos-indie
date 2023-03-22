import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { PrismaClient } from "@prisma/client";
import { SignInInput } from "../../dtos/inputs/SignIn-inputs";
const prisma = new PrismaClient();

@Resolver()
export class SignInResolver {
  @Query(() => Boolean)
  async signIn(@Arg("input") data: SignInInput) {
    const { email, password } = data;

    try {
      let signInfo = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });
      console.log(signInfo?.password == password);

      return false;
    } catch (error) {}
  }
}
