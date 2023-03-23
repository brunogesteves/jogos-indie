import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { SEARCH_POSTS } from "../../Graphql/Queries";

interface ErrorRouteProps {
  post: string;
}

interface SearchInfo {
  name: string;
  category: string;
  slug: string;
  thumb: string;
}

interface SearchProps {
  searchPosts: SearchInfo[];
}

export const useLogic = () => {
  const nameParams = useParams<ErrorRouteProps>();
  let namePage = nameParams.post;

  const [searchWord, setSearchWord] = useState<string>("");

  const { data } = useQuery<SearchProps>(SEARCH_POSTS, {
    variables: { search: searchWord },
  });

  useEffect(() => {
    setSearchWord(namePage);
  }, []);

  return {
    data: {
      data,
      namePage,
      searchWord,
    },
    methods: {
      setSearchWord,
    },
  };
};
