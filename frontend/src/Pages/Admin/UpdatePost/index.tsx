import React, { useState, useEffect, useRef } from "react";
import slugify from "react-slugify";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import Modal from "@mui/material/Modal";

import Admin from "../Admin";
import ImagesWIndow from "../../../components/Admin/ImagesAdmin/ImagesWIndow";
import NewCategory from "../../../components/NewCategory";

import "./UpdatePost.css";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_ADMIN_POST_INFO,
  GET_ALL_CATEGORIES,
} from "../../../Graphql/Queries";
import { UPDATE_ADMIN_POST_INFO } from "../../../Graphql/Mutations";

interface RouteParams {
  id: string;
}

export default function UpdatePost(props) {
  const nameParams = useParams<RouteParams>();
  let idNumber = nameParams.id;

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [slide, setSlide] = useState<boolean>(false);
  const [middle, setMiddle] = useState<boolean>(false);
  const [gameplay, setGameplay] = useState<boolean>(false);
  const [midSection, setMidSection] = useState<boolean>(false);
  const [publicPost, setPublicPost] = useState<boolean>(false);
  const [thumb, setThumb] = useState("");
  // const [file, setFile] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const editor = useRef(null);

  function dataForm(data) {
    setContent(data);
  }

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

  const { data } = useQuery(GET_ADMIN_POST_INFO, {
    variables: { id: Number(idNumber) },
  });
  const { data: categories } = useQuery(GET_ALL_CATEGORIES);

  const [updatePost, { data: isUpdated }] = useMutation(UPDATE_ADMIN_POST_INFO);

  useEffect(() => {
    if (data) {
      console.log("data: ", data.getAdminInfoPost[0].category);
      setName(data.getAdminInfoPost[0].name);
      setContent(data.getAdminInfoPost[0].content);
      setCategory(data.getAdminInfoPost[0].category);
      setSlide(data.getAdminInfoPost[0].slide);
      setMiddle(data.getAdminInfoPost[0].middle);
      setGameplay(data.getAdminInfoPost[0].gameplay);
      setPublicPost(data.getAdminInfoPost[0].public);
      setMidSection(data.getAdminInfoPost[0].midSection);
      setThumb(data.getAdminInfoPost[0].thumb);
    }
  }, [data]);

  function reload() {
    updatePost({
      variables: {
        id: idNumber,
        name: name,
        content: content,
        category: category,
        slug: slugify(name, { delimiter: "-" }),
        slide: slide,
        middle: middle,
        gameplay: gameplay,
        publicPost: publicPost,
        midSection: midSection,
        thumb: thumb,
      },
    });
  }
  return (
    <div>
      <Admin>
        <div className="updateContent">
          <div className="updateContent-field">
            <p className="update-warning">
              {isUpdated && isUpdated.updatePost.successfull
                ? ""
                : "Atualizado"}{" "}
            </p>
            <button onClick={reload}>Atualizar</button>
            Nome:
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <div>
              Publico
              <input
                type="checkbox"
                onClick={(e) =>
                  setPublicPost((e.target as HTMLInputElement).checked)
                }
                defaultChecked={publicPost ? true : false}
              />
            </div>
            <div>
              Slide
              <input
                type="checkbox"
                onClick={(e) =>
                  setSlide((e.target as HTMLInputElement).checked)
                }
                defaultChecked={slide ? true : false}
              />
              Meio
              <input
                type="checkbox"
                onClick={(e) =>
                  setMiddle((e.target as HTMLInputElement).checked)
                }
                defaultChecked={middle ? true : false}
              />
              Gameplay
              <input
                type="checkbox"
                onClick={(e) =>
                  setGameplay((e.target as HTMLInputElement).checked)
                }
                defaultChecked={gameplay ? true : false}
              />
              midSection
              <input
                type="checkbox"
                onClick={(e) =>
                  setMidSection((e.target as HTMLInputElement).checked)
                }
                defaultChecked={midSection ? true : false}
              />
            </div>
            <NewCategory />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Escolha uma Categoria</option>
              {categories &&
                categories.getAllCategories.map((cat, i) => (
                  <option key={i} value={cat.name}>
                    {cat.name.toUpperCase()}
                  </option>
                ))}
            </select>
            <img src={`/${thumb}`} alt={thumb} />
            <button type="button" onClick={() => setModalShow(true)}>
              Mudar Imagem
            </button>
            <Modal
              open={modalShow}
              onClose={() => setModalShow(false)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {
                <ImagesWIndow
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  setThumb={setThumb}
                  setModalShow={setModalShow}
                />
              }
            </Modal>
          </div>
          <div className="updateContent-form">
            <SunEditor
              setContents={content}
              ref={editor}
              lang="pt_br"
              width="92%"
              height="400"
              name="my-editor"
              setOptions={{
                mode: "classic",
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
              onChange={dataForm}
              // onImageUploadBefore={(files) => {
              //   let nameImage = files[0].name;
              //   setFile(files[0]);
              //   editor.current.editor.insertHTML(`<img src="/${nameImage}">`);
              //   return true;
              // }}
            />
          </div>
        </div>
      </Admin>
    </div>
  );
}
