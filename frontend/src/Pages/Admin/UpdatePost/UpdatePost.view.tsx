// import React, { useState, useEffect, useRef } from "react";
// import slugify from "react-slugify";
// import { useParams } from "react-router-dom";
// import SunEditor from "suneditor-react";

// import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
// import Modal from "@mui/material/Modal";

// import Admin from "../Admin";
// import ImagesWIndow from "../../../components/Admin/ImagesAdmin/ImagesWIndow";
// import NewCategory from "../../../components/NewCategory";

// import "./UpdatePost.css";
// import { useQuery, useMutation } from "@apollo/client";
// import {
//   GET_ADMIN_POST_INFO,
//   GET_ALL_CATEGORIES,
// } from "../../../Graphql/Queries";
// import { UPDATE_ADMIN_POST_INFO } from "../../../Graphql/Mutations";

// interface RouteParams {
//   id: string;
// }

// export default function UpdatePost(props) {
//   const nameParams = useParams<RouteParams>();
//   let idNumber = nameParams.id;

//   const [name, setName] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
//   const [slide, setSlide] = useState<boolean>(false);
//   const [middle, setMiddle] = useState<boolean>(false);
//   const [gameplay, setGameplay] = useState<boolean>(false);
//   const [midSection, setMidSection] = useState<boolean>(false);
//   const [publicPost, setPublicPost] = useState<boolean>(false);
//   const [thumb, setThumb] = useState("");
//   // const [file, setFile] = useState("");
//   const [modalShow, setModalShow] = useState(false);
//   const editor = useRef(null);

//   function dataForm(data) {
//     setContent(data);
//   }

//   // useEffect(() => {
//   //   let image = file.name;
//   //   const url = `${process.env.PUBLIC_URL}/upload/${image}`;
//   //   const data = new FormData();
//   //   data.append("file", file);
//   //   const options = {
//   //     headers: {
//   //       "Content-Type": "multipart/form-data",
//   //     },
//   //   };
//   //   axios.post(url, data, options);
//   // }, [file]);

//   const { data } = useQuery(GET_ADMIN_POST_INFO, {
//     variables: { id: Number(idNumber) },
//   });
//   const { data: categories } = useQuery(GET_ALL_CATEGORIES);

//   const [updatePost, { data: isUpdated }] = useMutation(UPDATE_ADMIN_POST_INFO);

//   useEffect(() => {
//     if (data) {
//       console.log("data: ", data.getAdminInfoPost[0].category);
//       setName(data.getAdminInfoPost[0].name);
//       setContent(data.getAdminInfoPost[0].content);
//       setCategory(data.getAdminInfoPost[0].category);
//       setSlide(data.getAdminInfoPost[0].slide);
//       setMiddle(data.getAdminInfoPost[0].middle);
//       setGameplay(data.getAdminInfoPost[0].gameplay);
//       setPublicPost(data.getAdminInfoPost[0].public);
//       setMidSection(data.getAdminInfoPost[0].midSection);
//       setThumb(data.getAdminInfoPost[0].thumb);
//     }
//   }, [data]);

//   function reload() {
//     updatePost({
//       variables: {
//         id: idNumber,
//         name: name,
//         content: content,
//         category: category,
//         slug: slugify(name, { delimiter: "-" }),
//         slide: slide,
//         middle: middle,
//         gameplay: gameplay,
//         publicPost: publicPost,
//         midSection: midSection,
//         thumb: thumb,
//       },
//     });
//   }
//   return (
//     <Admin>
//       {te}
//       <Formik
//         initialValues={data.values}
//         validationSchema={PostContentSchema}
//         onSubmit={(values, actions) => {
//           console.log(values);
//         }}
//       >
//         {({ errors, touched, setFieldValue }) => (
//           <Form className=" flex justify-center rever px-3 gap-x-3">
//             <div>
//               <button
//                 type="submit"
//                 className="  inline-block rounded mb-5  mx-10 cursor-pointer bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
//               >
//                 Publicar Post
//               </button>
//               {/* <Field name="content" />
//                 {errors.content && touched.content ? (
//                   <div className="text-red-500 ">{errors.content}</div>
//                 ) : null} */}
//               {methods.formField("name", "", "text", errors, touched)}
//               {methods.formField(
//                 "isScheduled",
//                 "Agendado",
//                 "checkbox",
//                 errors,
//                 touched
//               )}
//               {methods.formField("slide", "Slide", "checkbox", errors, touched)}
//               {methods.formField("middle", "Meio", "checkbox", errors, touched)}
//               {methods.formField(
//                 "gameplay",
//                 "Gameplay",
//                 "checkbox",
//                 errors,
//                 touched
//               )}
//               {methods.formField(
//                 "main",
//                 "Corpo da Página",
//                 "checkbox",
//                 errors,
//                 touched
//               )}
//               <select
//                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
//                   console.log(e.target.value);
//                   setFieldValue("category", e.target.value);
//                   if (e.target.value === "Adicionar uma categoria") {
//                     setOpenModal(true);
//                     setFieldValue("category", "");
//                     console.log(openModal);
//                   }
//                 }}
//               >
//                 <option
//                   className="text-sm bg-red-500 text-black"
//                   value="0"
//                   selected
//                   disabled
//                 >
//                   Selecione uma categoria
//                 </option>
//                 <option className="text-sm bg-red-500 ">
//                   Adicionar uma categoria
//                 </option>
//                 {data.categories?.getAllCategories.map(
//                   (cat: { name: string }, i: number) => {
//                     return (
//                       <option
//                         key={i}
//                         value={cat.name}
//                         className="bg-red-500 text-lg"
//                       >
//                         {cat.name}
//                       </option>
//                     );
//                   }
//                 )}
//               </select>
//               {openModal && <NewCategory />}

//               {errors.category && touched.category ? (
//                 <div className="text-red-500 mb-3">{errors.category}</div>
//               ) : null}
//               <div className="mt-4">
//                 <ImagesAdmin
//                   thumb={(thumbName) => {
//                     setFieldValue("thumb", thumbName);
//                     methods.setThumb(thumbName);
//                   }}
//                 />
//                 {errors.thumb && touched.thumb ? (
//                   <div className="text-red-500">{errors.thumb}</div>
//                 ) : null}
//               </div>
//             </div>
//             <div className="mt-4 h-full">
//               <Field name="content">
//                 {({ field, meta }) => (
//                   <div>
//                     <div className="updateContent-form">
//                       <SunEditor
//                         {...field}
//                         setContents={data.values.content}
//                         ref={data.editor}
//                         lang="pt_br"
//                         width="92%"
//                         height="500"
//                         name="my-editor"
//                         setOptions={{
//                           mode: "classNameNameic",
//                           katex: "window.katex",
//                           imageWidth: "(auto)",
//                           // imageHeight: "(auto)",
//                           // imageUploadUrl: `${process.env.PUBLIC_URL}/ckimage`,
//                           imageAccept: "*",
//                           // imageGalleryUrl: `${process.env.PUBLIC_URL}/images`,
//                           imageFileInput: true,
//                           // videoFileInput: false,
//                           tabDisable: false,
//                           buttonList: [
//                             [
//                               "undo",
//                               "redo",
//                               "font",
//                               "fontSize",
//                               "formatBlock",
//                               "paragraphStyle",
//                               "blockquote",
//                               "bold",
//                               "underline",
//                               "italic",
//                               "strike",
//                               "subscript",
//                               "superscript",
//                               "fontColor",
//                               "hiliteColor",
//                               "textStyle",
//                               "removeFormat",
//                               "outdent",
//                               "indent",
//                               "align",
//                               "horizontalRule",
//                               "list",
//                               "lineHeight",
//                               "table",
//                               "link",
//                               "image",
//                               "video",
//                               "audio",
//                               "math",
//                               "imageGallery",
//                               "fullScreen",
//                               "showBlocks",
//                               "codeView",
//                               "preview",
//                               "print",
//                               "save",
//                               "template",
//                             ],
//                           ],
//                         }}
//                         onChange={(data) => {
//                           // setCotent(data);
//                           if (data === "<p><br></p>") {
//                             setFieldValue("content", "");
//                           } else {
//                             setFieldValue("content", data);
//                           }
//                         }}
//                         onImageUploadBefore={(files) => {
//                           let nameImage = files[0].name;
//                           // setFile(files[0]);
//                           data.editor.current.editor.insertHTML(
//                             `<img src="/${nameImage}">`
//                           );
//                           return true;
//                         }}
//                       />
//                     </div>

//                     {meta.touched && meta.error && (
//                       <div className="error">{meta.error}</div>
//                     )}
//                   </div>
//                 )}
//               </Field>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </Admin>
//   );
// }

import React, { useState } from "react";
// import slugify from "react-slugify";
import SunEditor from "suneditor-react";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
// import Modal from "@mui/material/Modal";
import { Field, Form, Formik } from "formik";

import Admin from "../../../components/Admin/AdminLayout.view";

import { Button } from "tw-elements";

import { PostContentSchema } from "../../../libs/yup";
import ImagesAdmin from "../../../components/Admin/ImagesAdmin/ImagesAdmin";
import { useLogic } from "./UpdatePost.logic";
import NewCategory from "../../../components/Admin/NewCategory";

export default function UpdatePost(props) {
  const { data, methods } = useLogic();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Admin>
      {/* {te} */}
      <Formik
        initialValues={data.values}
        validationSchema={PostContentSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className=" flex justify-center rever px-3 gap-x-3">
            <div>
              <Button
                type="submit"
                className="  inline-block rounded mb-5  mx-10 cursor-pointer bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
              >
                Publicar Post
              </Button>
              {/* <Field name="content" />
                {errors.content && touched.content ? (
                  <div className="text-red-500 ">{errors.content}</div>
                ) : null} */}
              {methods.formField("name", "", "text", errors, touched)}
              {methods.formField(
                "isScheduled",
                "Agendado",
                "checkbox",
                errors,
                touched
              )}
              {methods.formField("slide", "Slide", "checkbox", errors, touched)}
              {methods.formField("middle", "Meio", "checkbox", errors, touched)}
              {methods.formField(
                "gameplay",
                "Gameplay",
                "checkbox",
                errors,
                touched
              )}
              {methods.formField(
                "main",
                "Corpo da Página",
                "checkbox",
                errors,
                touched
              )}
              <select
                className="p-1 rounded-lg text-red-500 text-sm w-full focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFieldValue("category", e.target.value);
                  if (e.target.value === "Adicionar uma categoria") {
                    setOpenModal(true);
                    setFieldValue("category", "");
                  }
                }}
                value={data.values.category}
              >
                <option
                  className="text-xs bg-red-500 text-white uppercase py-5"
                  value="0"
                  selected
                  disabled
                >
                  Selecione uma categoria
                </option>
                <option className="text-xs bg-red-500 text-white uppercase py-5">
                  Adicionar uma categoria
                </option>
                {data.categories?.getAllCategories.map(
                  (cat: { name: string }, i: number) => {
                    return (
                      <option
                        key={i}
                        value={cat.name.toUpperCase()}
                        className="bg-red-500 text-xs  text-white"
                      >
                        {cat.name.toUpperCase()}
                      </option>
                    );
                  }
                )}
              </select>
              {openModal && <NewCategory />}
              {errors.category && touched.category ? (
                <div className="text-red-500 mb-3">{errors.category}</div>
              ) : null}
              <div className="mt-4">
                <ImagesAdmin
                  thumb={(thumbName) => {
                    setFieldValue("thumb", thumbName);
                    methods.setThumb(thumbName);
                  }}
                />
                {errors.thumb && touched.thumb ? (
                  <div className="text-red-500">{errors.thumb}</div>
                ) : null}
              </div>
              <img src={`/${data.values.thumb}`} alt={data.values.thumb} />
            </div>
            <div className="mt-4 h-full">
              <Field name="content">
                {({ field, meta }) => (
                  <div>
                    <div className="updateContent-form">
                      <SunEditor
                        {...field}
                        setContents={data.values.content}
                        ref={data.editor}
                        lang="pt_br"
                        width="92%"
                        height="500"
                        name="my-editor"
                        setOptions={{
                          mode: "classNameNameic",
                          katex: "window.katex",
                          imageWidth: "(auto)",
                          // imageHeight: "(auto)",
                          // imageUploadUrl: `${process.env.PUBLIC_URL}/ckimage`,
                          imageAccept: "*",
                          // imageGalleryUrl: `${process.env.PUBLIC_URL}/images`,
                          imageFileInput: true,
                          // videoFileInput: false,
                          tabDisable: false,
                          buttonList: [
                            [
                              "undo",
                              "redo",
                              "font",
                              "fontSize",
                              "formatBlock",
                              "paragraphStyle",
                              "blockquote",
                              "bold",
                              "underline",
                              "italic",
                              "strike",
                              "subscript",
                              "superscript",
                              "fontColor",
                              "hiliteColor",
                              "textStyle",
                              "removeFormat",
                              "outdent",
                              "indent",
                              "align",
                              "horizontalRule",
                              "list",
                              "lineHeight",
                              "table",
                              "link",
                              "image",
                              "video",
                              "audio",
                              "math",
                              "imageGallery",
                              "fullScreen",
                              "showBlocks",
                              "codeView",
                              "preview",
                              "print",
                              "save",
                              "template",
                            ],
                          ],
                        }}
                        onChange={(data) => {
                          // setCotent(data);
                          if (data === "<p><br></p>") {
                            setFieldValue("content", "");
                          } else {
                            setFieldValue("content", data);
                          }
                        }}
                        onImageUploadBefore={(files) => {
                          let nameImage = files[0].name;
                          // setFile(files[0]);
                          data.editor.current.editor.insertHTML(
                            `<img src="/${nameImage}">`
                          );
                          return true;
                        }}
                      />
                    </div>

                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>
          </Form>
        )}
      </Formik>
    </Admin>
  );
}
