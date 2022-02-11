import { GraphQLString } from "graphql";
// import { MessagesType } from "../TypeDefs/Messages";
import { AuthenticationType } from "../TypeDefs/Authentication";
import { context } from "../context";
import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export const AUTHENTICATION = {
  type: AuthenticationType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { email, password } = args;

    const user = await context.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    const valid = user && user.password == password;

    // const valid = await bcrypt.compare(user.password, password);

    if (!valid) return { successfull: true, refresh: "", acess: "" };
    const SECRET = "90b55a6a-1762-4a46-a1cf-18a1f75acc1c";
    const username = user && user.name;

    const refreshToken = sign({ id: user && user.id }, SECRET, { expiresIn: "7d" });
    const token = sign({ id: user && user.id }, SECRET, { expiresIn: "15min" });

    return { successfull: true, refresh: refreshToken, token: token, username: username };
  },
};

// "n3586@hotmail.com"
// ""
