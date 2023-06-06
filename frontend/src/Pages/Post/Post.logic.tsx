import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_ONE_POST, GET_RANDOM_POSTS } from '../../Graphql/Queries';
import { PostRouteParams, RamdonPostsProps } from '../../Utils/types';
import useInfo from '../../Contexts/Context';
import { useEffect } from 'react';

export const useLogic = () => {
  const { slug } = useParams<PostRouteParams>();

  const { data: contentPost } = useQuery(GET_ONE_POST, {
    variables: { data: { slug: slug } }
  });

  const { setIdPost } = useInfo();

  useEffect(() => {
    setIdPost(contentPost?.getOnePost.id);
  }, [contentPost]);

  const { data: randomPosts } = useQuery<RamdonPostsProps>(GET_RANDOM_POSTS);

  return {
    data: {
      randomPosts,
      contentPost
    }
  };
};
