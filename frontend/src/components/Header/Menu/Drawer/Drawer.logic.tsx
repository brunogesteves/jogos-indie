import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { GET_ALL_CATEGORIES } from "../../../../Graphql/Queries";
import useInfo from "../../../../Contexts/Context";
import { useState } from "react";

export const useLogic = () => {
  let history = useHistory();
  const [word, setWord] = useState("");

  const { data } = useQuery(GET_ALL_CATEGORIES);
  const { openDrawer, setOpenDrawer, setSearchWord } = useInfo();
  function toPageSearch() {
    setSearchWord(word);
    history.push(`/procurar`);
  }

  return {
    data: {
      data,
      openDrawer,
    },
    methods: { setOpenDrawer, toPageSearch, setWord },
  };
};
