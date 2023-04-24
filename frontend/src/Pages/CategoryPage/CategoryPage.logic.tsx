import { useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import { useQuery } from '@apollo/client';
import { GET_POSTS_FROM_CATEGORY } from '../../Graphql/Queries';

export const useLogic = () => {
  const { category } = useParams<CategoryRouteParams>();
  console.log(category);

  const { data } = useQuery(GET_POSTS_FROM_CATEGORY, {
    variables: { input: { categoryName: category } }
  });

  return {
    data: { data }
  };
};
