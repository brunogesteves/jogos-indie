import React, { CSSProperties } from 'react';

import { GET_LIST_POSTS } from '../../../Graphql/Queries';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_POST, UPDATE_INPUT } from '../../../Graphql/Mutations';
import { AllPosts } from '../../../Utils/types';

export const useLogic = () => {
  const { data, refetch } = useQuery<AllPosts>(GET_LIST_POSTS);

  const [deletePost, { data: isErased }] = useMutation(DELETE_POST);
  const [updateOption, { data: isUpdated }] = useMutation(UPDATE_INPUT);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
  };

  function schedule(time: string) {
    return new Date(Number(time)).toLocaleString('pt-BR', {
      timeZone: 'UTC',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  function optionField(nameField: string, option: string, id: number, initialInfo: boolean) {
    return (
      <div>
        <span className="mr-1">{nameField}</span>
        <input
          type="checkbox"
          onClick={(e) => {
            updateOption({
              variables: {
                data: {
                  id: id.toString(),
                  info: (e.target as HTMLInputElement).checked,
                  option: option
                }
              },
              onCompleted: refetch
            });
          }}
          defaultChecked={initialInfo}
        />
      </div>
    );
  }
  return {
    data: {
      isErased,
      isUpdated,
      data,
      override
    },
    methods: {
      updateOption,
      deletePost,
      refetch,
      schedule,
      optionField
    }
  };
};
