import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { SignInInput } from '../../dtos/inputs/signIn-inputs';
import { SignInModel } from '../../dtos/models/signIn-models';

require('dotenv').config({ path: __dirname + '/.env' });
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

@Resolver()
export class SignInResolver {
  @Query(() => SignInModel)
  async signIn(@Arg('input') data: SignInInput) {
    const { email, password } = data;

    try {
      let signInfo = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (signInfo?.password == password) {
        const id = signInfo?.id;
        const email = signInfo?.email;
        const name = signInfo?.name;
        const token = jwt.sign(
          { id, email, name },
          process.env.SECRET as string,
          {
            expiresIn: 300, // expires in 5min
          }
        );
        return { auth: true, token: token };
      }
    } catch (error) {}
  }
}
