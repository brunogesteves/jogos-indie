import React, { useEffect, useRef, useState } from 'react';
import slugify from 'react-slugify';
import { useParams } from 'react-router-dom';
import { Field } from 'formik';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POST_TO_UPDATE } from '../../../Graphql/Queries';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { PostProps } from '../../../Utils/types';
import { CREATE_SAVE_POST } from '../../../Graphql/Mutations';

import type { ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';

interface PageIdProps {
  id: string;
}

export const useLogic = () => {
  const { id } = useParams<PageIdProps>();
  const [thumbName, setThumbName] = useState<string>('');
  const editor = useRef<any>(null);
  const [createSavePost] = useMutation(CREATE_SAVE_POST);
  const { data } = useQuery(GET_POST_TO_UPDATE, {
    variables: {
      input: {
        id: id.toString()
      }
    }
  });

  const [initialValues, setinitialValues] = useState<PostProps>({
    id: id.toString(),
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
  });

  useEffect(() => {
    setinitialValues({
      id: id,
      name: data?.getOneUpdatePost.name,
      content: data?.getOneUpdatePost?.content,
      category: data?.getOneUpdatePost.category,
      slug: data?.getOneUpdatePost.slug,
      scheduled: data?.getOneUpdatePost.scheduled,
      schedule: data?.getOneUpdatePost.schedule,
      slide: data?.getOneUpdatePost.slide,
      middle: data?.getOneUpdatePost.middle,
      gameplay: data?.getOneUpdatePost.gameplay,
      publicPost: data?.getOneUpdatePost.publicPost,
      midSection: data?.getOneUpdatePost.midSection,
      thumb: data?.getOneUpdatePost.thumb
    });
  }, [data]);

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
          values={initialValues[fieldName]}
          checked={initialValues[fieldName]}
        />
        <div className=""></div>
        {errors[fieldName] && touched[fieldName] ? (
          <div className="text-red-500">{errors[fieldName]}</div>
        ) : null}
      </div>
    );
  }

  function notify(message: string, success: boolean) {
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
    if (success) {
      toast.success(message, options);
    } else {
      toast.error(message, options);
    }
  }

  function updatePost(values: PostProps) {
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
      onCompleted: () => {
        notify('Post atualizado', true);
      },
      onError: () => {
        notify('Tente novamente', false);
      }
    });
  }

  return {
    data: {
      initialValues,
      thumbName,
      editor
    },
    methods: {
      formField,
      setThumbName,
      updatePost,
      notify
    }
  };
};
