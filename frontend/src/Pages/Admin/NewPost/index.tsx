import React, { useState, useEffect, useRef } from "react";
import slugify from "react-slugify";
import { useHistory } from "react-router-dom";
import SunEditor from "suneditor-react";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import Modal from "@mui/material/Modal";

import Admin from "../Admin";
import ImagesWIndow from "../../../components/ImagesWIndow";
import NewCategory from "../../../components/NewCategory";

import "./NewPost.css";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../Graphql/Queries";
import { CREATE_POST } from "../../../Graphql/Mutations";

export default function UpdatePost(props) {
  let history = useHistory();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isscheduled, setisScheduled] = useState(false);
  const [schedule, setSchedule] = useState("");
  const [slide, setSlide] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [gameplay, setGameplay] = useState(false);
  const [midSection, setMidSection] = useState(false);
  const [thumb, setThumb] = useState("");
  const [file, setFile] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const editor = useRef<any>(null);

  function dataForm(data) {
    setContent(data);
  }

  useEffect(() => {
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
  }, [file]);

  const { data: categories } = useQuery(GET_ALL_CATEGORIES);

  const [createPost, { data: isCreated }] = useMutation(CREATE_POST);

  function create() {
    createPost({
      variables: {
        name: name,
        content: content,
        category: category,
        slug: slugify(name, { delimiter: "-" }),
        scheduled: isscheduled,
        schedule: schedule,
        slide: slide,
        middle: middle,
        gameplay: gameplay,
        publicPost: isscheduled,
        midSection: midSection,
        thumb: thumb,
      },
    });
  }

  useEffect(() => {
    if (isCreated) {
      const newPostId = isCreated.createPost.id;

      history.push(`/admin/updatepost/${newPostId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreated]);

  return (
    <div>
      <Admin>
        <div className="updateContent">
          <div className="updateContent-field">
            <button onClick={create}>
              {isscheduled ? "Agendar" : "Publicar"}
            </button>
            Nome:
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <div>
              Agendar
              <input
                type="checkbox"
                onClick={(e) =>
                  setisScheduled((e.target as HTMLInputElement).checked)
                }
              />
              {isscheduled ? (
                <input
                  type="datetime-local"
                  className={isscheduled ? "schedule-show" : "schedule"}
                  onChange={(e) => setSchedule(e.target.value)}
                />
              ) : null}
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
                  <option key={i}>{cat.name.toUpperCase()}</option>
                ))}
            </select>
            <img src={`/${thumb}`} alt={thumb} />
            <button type="button" onClick={() => setModalShow(true)}>
              Adicionar Imagem
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
              onImageUploadBefore={(files) => {
                let nameImage = files[0].name;
                setFile(files[0]);
                editor.current.editor.insertHTML(`<img src="/${nameImage}">`);
                return true;
              }}
            />
          </div>
        </div>
      </Admin>
    </div>
  );
}
