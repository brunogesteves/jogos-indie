import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { NEW_CATEGORY, DELETE_CATEGORY } from '../../../Graphql/Mutations';
import { GET_ALL_CATEGORIES } from '../../../Graphql/Queries';

export const useLogic = () => {
  const { data, refetch } = useQuery(GET_ALL_CATEGORIES);
  const [wordInput, setWordInput] = useState('');
  const [deleteCategory, { data: isdeleted }] = useMutation(DELETE_CATEGORY);
  const [createCategory, { data: isAdded }] = useMutation(NEW_CATEGORY);
  const [inputArea, setInputArea] = useState(false);
  const [categoryChoosed, setCategoryChoosed] = useState('0');

  useEffect(() => {
    if (isAdded?.createCategory) {
      setCategoryChoosed(wordInput);
      setWordInput('');
      setInputArea(false);
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdded]);

  return {
    data: {
      data,
      wordInput,
      isAdded,
      isdeleted,
      inputArea,
      categoryChoosed
    },
    methods: {
      refetch,
      deleteCategory,
      createCategory,
      setInputArea,
      setCategoryChoosed,
      setWordInput
    }
  };
};
