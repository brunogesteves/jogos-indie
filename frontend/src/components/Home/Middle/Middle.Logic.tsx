import { MiddleProps } from '../../../../types';
import { GET_ALL_POSTS_MIDDLE } from '../../../Graphql/Queries';
import { useQuery } from '@apollo/client';

export const useLogic = () => {
  const { data } = useQuery<MiddleProps>(GET_ALL_POSTS_MIDDLE);

  return {
    data: {
      data
    }
  };
};
