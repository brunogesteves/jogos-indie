import { useEffect } from "react";

import { GET_LIST_POSTS } from "../../../Graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_POST, UPDATE_INPUT } from "../../../Graphql/Mutations";

export const useLogic = () => {
  const { data, refetch } = useQuery(GET_LIST_POSTS);

  const [deletePost, { data: isErased }] = useMutation(DELETE_POST);
  const [updateOption, { data: isUpdated }] = useMutation(UPDATE_INPUT);

  useEffect(() => {
    if (
      (isErased && isErased.deletePost.successfull) ||
      (isUpdated && isUpdated.deletePost.successfull)
    ) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isErased]);

  return {
    data: {
      isErased,
      isUpdated,
      data,
    },
    methods: {
      updateOption,
      deletePost,
      refetch,
    },
  };
};
