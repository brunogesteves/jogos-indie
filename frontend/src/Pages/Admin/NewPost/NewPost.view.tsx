import React, { useState } from 'react';
// import slugify from "react-slugify";
import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
// import Modal from "@mui/material/Modal";
import { Field, Form, Formik } from 'formik';

import Admin from '../../../components/Admin/AdminLayout.view';

// import { useHistory } from "react-router-dom";
import { PostContentSchema } from '../../../libs/yup';
import ImagesAdmin from '../../../components/Admin/ImagesAdmin/ImagesAdmin';
import { useLogic } from './NewPost.logic';
import NewCategory from '../../../components/Admin/NewCategory';

export default function UpdatePost(props) {
  const { data, methods } = useLogic();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Admin>
      <Formik
        initialValues={data.values}
        validationSchema={PostContentSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}>
        {({ errors, touched, setFieldValue }) => (
          <Form className=" flex justify-center  px-3 gap-x-3">
            <div>
              <button
                type="submit"
                className="  inline-block rounded my-5  mx-10 cursor-pointer bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                Publicar Post
              </button>
              {methods.formField('name', '', 'text', errors, touched)}
              {methods.formField('isScheduled', 'Agendado', 'checkbox', errors, touched)}
              {methods.formField('slide', 'Slide', 'checkbox', errors, touched)}
              {methods.formField('middle', 'Meio', 'checkbox', errors, touched)}
              {methods.formField('gameplay', 'Gameplay', 'checkbox', errors, touched)}
              {methods.formField('main', 'Corpo da Página', 'checkbox', errors, touched)}
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  console.log(e.target.value);
                  setFieldValue('category', e.target.value);
                  if (e.target.value === 'Adicionar uma categoria') {
                    setOpenModal(true);
                    setFieldValue('category', '');
                  } else {
                    setOpenModal(false);
                  }
                }}>
                <option className="text-sm bg-red-500 text-black" value="0" selected disabled>
                  Selecione uma categoria
                </option>
                <option className="text-sm bg-red-500 ">Adicionar uma categoria</option>
                {data.categories?.getAllCategories.map((cat: { name: string }, i: number) => {
                  return (
                    <option key={i} value={cat.name} className="bg-red-500 text-lg">
                      {cat.name}
                    </option>
                  );
                })}
              </select>
              {openModal && <NewCategory />}
              {errors.category && touched.category ? (
                <div className="text-red-500 mb-3">{errors.category}</div>
              ) : null}
              <div className="mt-4">
                <ImagesAdmin
                  thumbName={(thumbName: string) => {
                    setFieldValue('thumb', thumbName);
                    methods.setThumbName(thumbName);
                  }}
                />
                {errors.thumb && touched.thumb ? (
                  <div className="text-red-500">{errors.thumb}</div>
                ) : null}
              </div>
              <img
                src={`/${data.thumbName || 'nothumbnail.png'}`}
                alt={data.thumbName || ' '}
                className="w-40 m-6 mt-1"
              />
            </div>
            <div className="mt-4 h-full z-0">
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
                          mode: 'classNameNameic',
                          katex: 'window.katex',
                          imageWidth: '(auto)',
                          // imageHeight: "(auto)",
                          // imageUploadUrl: `${process.env.PUBLIC_URL}/ckimage`,
                          imageAccept: '*',
                          // imageGalleryUrl: `${process.env.PUBLIC_URL}/images`,
                          imageFileInput: true,
                          // videoFileInput: false,
                          tabDisable: false,
                          buttonList: [
                            [
                              'undo',
                              'redo',
                              'font',
                              'fontSize',
                              'formatBlock',
                              'paragraphStyle',
                              'blockquote',
                              'bold',
                              'underline',
                              'italic',
                              'strike',
                              'subscript',
                              'superscript',
                              'fontColor',
                              'hiliteColor',
                              'textStyle',
                              'removeFormat',
                              'outdent',
                              'indent',
                              'align',
                              'horizontalRule',
                              'list',
                              'lineHeight',
                              'table',
                              'link',
                              'image',
                              'video',
                              'audio',
                              'math',
                              'imageGallery',
                              'fullScreen',
                              'showBlocks',
                              'codeView',
                              'preview',
                              'print',
                              'save',
                              'template'
                            ]
                          ]
                        }}
                        onChange={(data) => {
                          // setCotent(data);
                          if (data === '<p><br></p>') {
                            setFieldValue('content', '');
                          } else {
                            setFieldValue('content', data);
                          }
                        }}
                        onImageUploadBefore={(files) => {
                          let nameImage = files[0].name;
                          // setFile(files[0]);
                          data.editor.current.editor.insertHTML(`<img src="/${nameImage}">`);
                          return true;
                        }}
                      />
                    </div>

                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
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
