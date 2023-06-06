import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_POSTS_FROM_CATEGORY } from '../../Graphql/Queries';
import { CategoryProps, CategoryRouteParams } from '../../Utils/types';

export const useLogic = () => {
  const { category } = useParams<CategoryRouteParams>();

  const { data } = useQuery<CategoryProps>(GET_POSTS_FROM_CATEGORY, {
    variables: { input: { categoryName: category } }
  });

  return {
    data: { data }
  };
};
