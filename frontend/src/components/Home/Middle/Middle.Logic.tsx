import { GET_ALL_POSTS_MIDDLE } from "../../../Graphql/Queries";
import { useQuery } from "@apollo/client";

interface MiddleInfo {
  name: string;
  thumb: string;
  slug: string;
}

interface MiddleData {
  getAllMiddle: MiddleInfo[];
}

export const useLogic = () => {
  const { data } = useQuery<MiddleData>(GET_ALL_POSTS_MIDDLE);

  return {
    data: {
      data,
    },
  };
};
