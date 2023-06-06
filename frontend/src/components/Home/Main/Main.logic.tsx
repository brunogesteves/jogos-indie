import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS_MIDSECTION } from '../../../Graphql/Queries';
import { MiddleProps } from '../../../../types';

export const useLogic = () => {
  const { data } = useQuery<MiddleProps>(GET_ALL_POSTS_MIDSECTION);

  return {
    data: {
      data
    }
  };
};
