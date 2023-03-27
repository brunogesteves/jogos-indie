import React, { useRef, useState } from "react";
// import slugify from "react-slugify";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
// import Modal from "@mui/material/Modal";
import { Field } from "formik";

// import NewCategory from "../../../components/Admin/NewCategory";

// import "./NewPost.css";

// import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../Graphql/Queries";
// import { CREATE_POST } from "../../../Graphql/Mutations";

export const useLogic = () => {
  // let history = useHistory();
  const [thumb, setThumb] = useState<string>("");
  const editor = useRef<any>(null);
  // const file = useRef<any>(null);

  let values = {
    name: "",
    isScheduled: false,
    category: "",
    slide: false,
    middle: false,
    gameplay: false,
    midSection: false,
    thumb: "",
    content: "",
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

  const { data: categories } = useQuery(GET_ALL_CATEGORIES);

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
          // value={}
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
      thumb,
      editor,
    },
    methods: {
      formField,
      setThumb,
    },
  };
};
