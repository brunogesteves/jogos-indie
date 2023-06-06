import { useEffect, useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../../../Graphql/Queries';
import { DELETE_CATEGORY, NEW_CATEGORY } from '../../../Graphql/Mutations';

export const useLogic = () => {
  const { data, refetch } = useQuery(GET_ALL_CATEGORIES);
  const [wordInput, setWordInput] = useState('');
  const [deleteCategory, { data: isdeleted }] = useMutation(DELETE_CATEGORY);
  const [createCategory, { data: isAdded }] = useMutation(NEW_CATEGORY);

  useEffect(() => {
    if (isAdded?.createCategory) {
      setWordInput('');
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdded]);

  useEffect(() => {
    if (isdeleted?.deleteCategory) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isdeleted]);

  return {
    data: {
      wordInput,
      data
    },
    methods: {
      refetch,
      deleteCategory,
      createCategory,
      setWordInput
    }
  };
};
