import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserInfoInput } from '../../dtos/inputs/signIn-userInfo';
import { UserInfoModel } from '../../dtos/models/userInfo-models';
import jwt_decode from 'jwt-decode';

interface UserInfo {
  name: string;
  email: string;
}

@Resolver()
export class UserInfoResolver {
  @Query(() => UserInfoModel)
  async getUserInfo(@Arg('input') data: UserInfoInput) {
    const { token } = data;
    const initialuser = {
      name: '',
      email: '',
    };
    const tokenDecoded: UserInfo = jwt_decode(token);
    if (tokenDecoded) {
      initialuser.name = tokenDecoded?.name;
      initialuser.email = tokenDecoded?.email;
    }

    try {
      return initialuser;
    } catch (error) {}
  }
}
