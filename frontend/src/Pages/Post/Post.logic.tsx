import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POST_TO_SHOW_OFF, GET_RANDOM_POSTS } from "../../Graphql/Queries";
import useInfo from "../../Contexts/Context";

interface RouteParams {
  post: string;
}

export const useLogic = () => {
  const { post } = useParams<RouteParams>();

  const { setIdPost } = useInfo();

  const { data } = useQuery(GET_POST_TO_SHOW_OFF, {
    variables: { input: { name: post } },
  });

  const { data: randomPosts } = useQuery(GET_RANDOM_POSTS, {
    variables: { input: { name: post } },
  });

  useEffect(() => {
    setIdPost(data?.frontPostQuery?.id);
  }, []);

  return {
    data: {
      randomPosts,
      data,
    },
  };
};
