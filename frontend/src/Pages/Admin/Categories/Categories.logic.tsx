import { useEffect, useContext, useState } from "react";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../Graphql/Queries";
import { DELETE_CATEGORY } from "../../../Graphql/Mutations";

import { InfoContext } from "../../../Contexts/Context";

export const useLogic = () => {
  const { data, refetch } = useQuery(GET_ALL_CATEGORIES);
  const [deleteCategory, { data: isdeleted }] = useMutation(DELETE_CATEGORY);

  const { isCategoryAdded, setIsCategoryAdded } = useContext(InfoContext);

  useEffect(() => {
    if (isCategoryAdded) {
      refetch();
      setIsCategoryAdded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCategoryAdded]);

  useEffect(() => {
    if (isdeleted && isdeleted.deleteCategory.successfull) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isdeleted]);

  const [wordInput, setWordInput] = useState("");
  // const [createCategory, { data: isAdded }] = useMutation(NEW_CATEGORY);

  // useEffect(() => {
  //   if (isAdded) {
  //     setIsCategoryAdded(isAdded.createCategory.successfull);
  //   }
  // }, [isAdded, setIsCategoryAdded]);

  return {
    data: {
      wordInput,
      data,
    },
    methods: {
      refetch,
      deleteCategory,
      setWordInput,
    },
  };
};
