import React, { useState, useEffect, useRef } from "react";
import SunEditor from "suneditor-react";
import slugify from "react-slugify";
import { Redirect } from "react-router-dom";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { base_url } from "../../../config";

import Admin from "../Admin";
import ImagesWIndow from "../../../Components/ImagesWIndow/ImagesWIndow";
import NewCategory from "../../../Components/NewCategory/NewCategory";
import NewPostService from "../../../Services/NewPost";
import CategoryService from "../../../Services/Category";

import "./NewPost.css";
var moment = require("moment");

export default function NewPost(props) {
  var scheduleTime = moment().format("YYYY-MM-DD HH:mm");
  const [namePost, setNamePost] = useState("");
  const [content, setContent] = useState("");
  const [thumb, setThumb] = useState("");
  const [categories, setCategories] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [datetime, setDatetime] = useState("");
  const [id, setId] = useState("");
  const [schedule, setSchedule] = useState(false);
  const [slide, setSlide] = useState(false);
  const [gameplay, setGameplay] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [publicpost] = useState(1);

  const editor = useRef(null);

  function dataForm(data) {
    setContent(data);
  }

  function createPost() {
    namePost && content && content && thumb
      ? NewPostService.new(
          namePost,
          content,
          category,
          thumb,
          slugify(namePost, { delimiter: "-" }),
          schedule ? 1 : 0,
          datetime ? datetime : scheduleTime,
          slide ? 1 : 0,
          middle ? 1 : 0,
          gameplay ? 1 : 0,
          gallery ? 1 : 0,
          publicpost

          // create table posts (id int auto_increment primary key, name varchar(255), content text, category varchar(255), thumb varchar(255), slug varchar(255), schedule slide tinyint(1), datetime datetime, slide tinyint(1), middle tinyint(1), gameplay tinyint(1), publicpost tinyint(1));
        )
          .then((res) => {
            if (res.insertId) {
              setId(res.insertId);
              setIsAdded(true);
            } else {
              alert(res);
              setIsAdded(false);
            }
          })
          .catch((error) => {
            console.log("Erro ao adicionar o post");
          })
      : alert("Há campos vazios");
  }

  useEffect(() => {
    CategoryService.get().then((res) => {
      setCategories(res);
    });
  }, [word]);

  function sendFile(file) {
    const url = `${base_url}/images/image`;
    const data = new FormData();
    data.append("file", file);
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios.post(url, data, options);
  }

  console.log("cat: ", category);

  return (
    <div>
      {isAdded ? <Redirect to={`/admin/updatepost/${id}`} /> : null}
      <Admin>
        <div className="newContent">
          <div className="newContent-field">
            <button onClick={createPost}>
              {schedule ? "Agendar" : "Publicar"}
            </button>
            Nome:
            <input type="text" onChange={(e) => setNamePost(e.target.value)} />
            Agendar
            <input
              type="checkbox"
              onClick={(e) => setSchedule(e.target.checked)}
            />
            {schedule ? (
              <input
                type="datetime-local"
                className={schedule ? "schedule-show" : "schedule"}
                onChange={(e) => setDatetime(e.target.value)}
              />
            ) : null}
            Slide
            <input
              type="checkbox"
              onClick={(e) => setSlide(e.target.checked)}
            />
            Meio
            <input
              type="checkbox"
              onClick={(e) => setMiddle(e.target.checked)}
            />
            Gameplay
            <input
              type="checkbox"
              onClick={(e) => setGameplay(e.target.checked)}
            />
            Galeria
            <input
              type="checkbox"
              onClick={(e) => setGallery(e.target.checked)}
            />
            <NewCategory addCategory={setWord} />
            <select onChange={(e) => setCategory(e.target.value)}>
              <option>Escolha uma Categoria</option>
              {categories.map((res, i) => (
                <option className="option-category" key={i}>
                  {res.name}
                </option>
              ))}
            </select>
            <img src={`/${thumb}`} alt={thumb} />
            <div>
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
          </div>
          <div className="newContent-form">
            <SunEditor
              ref={editor}
              lang="pt_br"
              width="100%"
              height="400"
              name="my-editor"
              setOptions={{
                mode: "classic",
                katex: "window.katex",
                imageWidth: "(auto)",
                imageHeight: "(auto)",
                // imageUploadUrl: `${base_url}upload`,
                imageAccept: "*",
                imageGalleryUrl: `${base_url}/images`,
                imageFileInput: true,
                videoFileInput: false,
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
                sendFile(files[0]);
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
