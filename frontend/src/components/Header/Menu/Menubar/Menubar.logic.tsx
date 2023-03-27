import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../../Graphql/Queries";

import useInfo from "../../../../Contexts/Context";

export const useLogic = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);

  let history = useHistory();

  const { setSearchWord } = useInfo();

  function toPageSearch() {
    history.push(`/procurar`);
  }
  return {
    data: {
      data,
    },
    methods: { toPageSearch, setSearchWord },
  };
};
