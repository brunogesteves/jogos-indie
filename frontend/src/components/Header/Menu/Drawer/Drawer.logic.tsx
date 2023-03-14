import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../../Graphql/Queries";
import useInfo from "../../../../Contexts/Context";

export const useLogic = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);
  const { openDrawer, setOpenDrawer } = useInfo();

  return {
    data: {
      data,
      openDrawer,
    },
    methods: { setOpenDrawer },
  };
};
