import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS_MIDSECTION } from "../../../Graphql/Queries";

export const useLogic = () => {
  const { data } = useQuery(GET_ALL_POSTS_MIDSECTION);

  return {
    data: {
      data,
    },
  };
};
