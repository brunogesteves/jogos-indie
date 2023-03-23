import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { PrismaClient } from "@prisma/client";
import { SignInInput } from "../../dtos/inputs/SignIn-inputs";
import { SigInModel } from "../../dtos/models/signIn-models";

const prisma = new PrismaClient();

@Resolver()
export class SignInResolver {
  @Query(() => SigInModel)
  async signIn(@Arg("input") data: SignInInput) {
    const { email, password } = data;

    try {
      let signInfo = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (signInfo?.password == password) return signInfo;
    } catch (error) {}
  }
}
