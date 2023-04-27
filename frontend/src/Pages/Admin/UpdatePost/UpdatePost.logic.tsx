import React, { useRef, useState } from 'react';
// import slugify from "react-slugify";
import { useParams } from 'react-router-dom';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
// import Modal from "@mui/material/Modal";
import { Field } from 'formik';

// import NewCategory from "../../../components/Admin/NewCategory";

// import "./NewPost.css";

import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES, GET_POST_TO_UPDATE } from '../../../Graphql/Queries';
// import { CREATE_POST } from "../../../Graphql/Mutations";

interface PageIdProps {
  id: string;
}
export const useLogic = () => {
  const { id } = useParams<PageIdProps>();
  const [thumbName, setThumbName] = useState<string>('');
  const editor = useRef<any>(null);
  const [thumb, setThumb] = useState<string>('');
  // const file = useRef<any>(null);
  const { data: categories } = useQuery(GET_ALL_CATEGORIES);
  const { data: info_post } = useQuery(GET_POST_TO_UPDATE, {
    variables: { input: { id: id } }
  });

  let values = {
    name: info_post?.postQuery.name,
    isScheduled: info_post?.postQuery.scheduled,
    category: info_post?.postQuery.category.toUpperCase(),
    slide: info_post?.postQuery.slide,
    middle: info_post?.postQuery.mid,
    gameplay: info_post?.postQuery.gameplay,
    midSection: info_post?.postQuery.midSection,
    thumb: info_post?.postQuery.thumb,
    content: info_post?.postQuery.content
  };

  // useEffect(() => {
  //   let image = file.name;
  //   const url = `${process.env.PUBLIC_URL}/upload/${image}`;
  //   const data = new FormData();
  //   data.append("file", file);
  //   const options = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   };
  //   axios.post(url, data, options);
  // }, [file]);

  // const [createPost, { data: isCreated }] = useMutation(CREATE_POST);

  // function create() {
  //   createPost({
  //     variables: {
  //       name: name,
  //       content: content,
  //       category: category,
  //       slug: slugify(name, { delimiter: "-" }),
  //       scheduled: isscheduled,
  //       schedule: schedule,
  //       slide: slide,
  //       middle: middle,
  //       gameplay: gameplay,
  //       publicPost: isscheduled,
  //       midSection: midSection,
  //       // thumb: thumb,
  //     },
  //   });
  // }

  // useEffect(() => {
  //   if (isCreated) {
  //     const newPostId = isCreated.createPost.id;

  //     history.push(`/admin/updatepost/${newPostId}`);
  //   }
  //   //    eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isCreated]);

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
          value={values[fieldName]}
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
      categories,
      values,
      thumbName,
      editor
    },
    methods: {
      formField,
      setThumb,
      setThumbName
    }
  };
};
