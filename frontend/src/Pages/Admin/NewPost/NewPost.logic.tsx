import React, { useEffect, useRef, useState } from 'react';
import slugify from 'react-slugify';
import { Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_SAVE_POST } from '../../../Graphql/Mutations';
import { PostProps } from '../../../Utils/types';
import { toast } from 'react-toastify';

import type { ToastOptions } from 'react-toastify';

export const useLogic = () => {
  let history = useHistory();
  const [thumbName, setThumbName] = useState<string>('');
  const editor = useRef<any>(null);

  let values: PostProps = {
    id: '0',
    name: '',
    content: '',
    category: '',
    slug: '',
    scheduled: true,
    schedule: new Date(),
    slide: false,
    middle: false,
    gameplay: false,
    publicPost: false,
    midSection: false,
    thumb: ''
  };

  const [createSavePost, { data: isCreated }] = useMutation(CREATE_SAVE_POST);

  function notify(message: string) {
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    };

    toast.error(message, options);
  }

  function newPost(values: PostProps) {
    createSavePost({
      variables: {
        input: {
          category: values.category,
          content: values.content,
          gameplay: values.gameplay,
          id: values.id,
          midSection: values.midSection,
          middle: values.middle,
          name: values.name,
          publicPost: values.publicPost,
          scheduled: values.slide,
          schedule: values.schedule,
          slide: values.slide,
          slug: slugify(values.slug),
          thumb: values.thumb
        }
      },

      onError: () => {
        notify('Desculpe, Tente novamente');
      }
    });
  }

  useEffect(() => {
    if (isCreated) {
      const newPostId = isCreated.createPost.id;
      history.push(`/admin/updatepost/${newPostId}`);
    }
  }, [isCreated]);

  function formField(
    fieldName: string,
    fieldLabel: string,
    type: string,
    errors: any,
    touched: any
  ) {
    return (
      <div className="mb-4">
        <span className="mr-3">{fieldLabel}</span>
        <Field
          className="ml-0 bg-red-200 px-2 rounded-lg focus:outline-none"
          placeholder="nome do post"
          type={type}
          name={fieldName}
        />
        <div className=""></div>
        {errors[fieldName] && touched[fieldName] ? (
          <div className="text-red-500">{errors[fieldName]}</div>
        ) : null}
      </div>
    );
  }

  return {
    data: {
      values,
      thumbName,
      editor
    },
    methods: {
      formField,
      setThumbName,
      newPost
    }
  };
};
