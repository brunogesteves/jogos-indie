import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../../Graphql/Queries";

import * as dotenv from "dotenv";
import useInfo from "../../../../Contexts/Context";
import React, { useState } from "react";

export const useLogic = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);

  let history = useHistory();

  const { setSearchWord } = useInfo();
  const [word, setWord] = useState("");

  function toPageSearch() {
    setSearchWord(word);
    history.push(`/procurar`);
  }
  return {
    data: {
      data,
    },
    methods: { toPageSearch, setWord },
  };
};
