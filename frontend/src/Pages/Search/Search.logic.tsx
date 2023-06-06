import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';

import { useQuery } from '@apollo/client';
import { SEARCH_POSTS } from '../../Graphql/Queries';
import useInfo from '../../Contexts/Context';
import { SearchProps } from '../../../types';

export const useLogic = () => {
  const { searchWord, setSearchWord } = useInfo();
  const [value] = useDebounce(searchWord, 1000);

  const { data, refetch } = useQuery<SearchProps[]>(SEARCH_POSTS);

  useEffect(() => {
    refetch({
      input: {
        term: value
      }
    });
  }, [value]);

  return {
    data: { data, value, searchWord },
    methods: { setSearchWord }
  };
};
