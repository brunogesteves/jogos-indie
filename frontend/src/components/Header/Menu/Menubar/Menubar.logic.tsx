import { KeyboardEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../../../../Graphql/Queries';

import useInfo from '../../../../Contexts/Context';

export const useLogic = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);
  let history = useHistory();

  const { setSearchWord, searchWord } = useInfo();

  function toPageSearch() {
    history.push(`/procurar`);
  }

  function toPageSearchOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && searchWord !== '') {
      history.push(`/procurar`);
    }
  }

  return {
    data: {
      data
    },
    methods: { toPageSearch, setSearchWord, toPageSearchOnKeyDown }
  };
};
