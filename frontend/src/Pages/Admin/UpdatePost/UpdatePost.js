import React, { useState, useEffect, useRef } from "react";
import slugify from "react-slugify";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { base_url } from "../../../config";

import Admin from "../Admin";
import ImagesWIndow from "../../../Components/ImagesWIndow/ImagesWIndow";
import NewCategory from "../../../Components/NewCategory/NewCategory";
import UpdateService from "../../../Services/UpdateService";

import "./UpdatePost.css";

export default function UpdatePost(props) {
  const nameParams = useParams();
  let idNumber = nameParams.id;

  // const [id, setId] = useState("");
  const [namePost, setNamePost] = useState("");
  const [content, setContent] = useState("");
  const [thumb, setThumb] = useState("");
  const [slide, setSlide] = useState(false);
  const [gameplay, setGameplay] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [publicPost, setPublicPost] = useState();
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [word, setWord] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [warning, setWarning] = useState("");
  const editor = useRef(null);

  useEffect(() => {
    UpdateService.getInfo(idNumber).then((res) => {
      setNamePost(res[0].name);
      setContent(res[0].content);
      setThumb(res[0].thumb);
      // setId(res[0].id);
      setSlide(res[0].slide);
      setGameplay(res[0].gameplay);
      setMiddle(res[0].middle);
      setGallery(res[0].gallery);
      setPublicPost(res[0].publicpost);
      setCategory(res[0].category);
    });
    // eslint-disable-next-line
  }, []);

  function dataForm(data) {
    setContent(data);
  }

  useEffect(() => {
    UpdateService.category().then((res) => {
      setCategories(res);
    });
  }, [word]);

  function update() {
    namePost && content
      ? UpdateService.update(
          idNumber,
          namePost,
          content,
          category,
          thumb,
          slugify(namePost, { delimiter: "-" }),
          slide ? 1 : 0,
          middle ? 1 : 0,
          gameplay ? 1 : 0,
          gallery ? 1 : 0,
          publicPost
        )
          .then((res) => {
            setWarning(res.msg);
            setInterval(() => {
              setWarning("");
            }, 5000);
          })
          .catch((error) => {
            console.log("erro");
          })
      : alert("Há campos vazios");
  }

  useEffect(() => {
    let image = file.name;
    const url = `${base_url}/upload/${image}`;
    const data = new FormData();
    data.append("file", file);
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios.post(url, data, options);
  }, [file]);
  console.log("res-post: ", category);
  return (
    <div>
      <Admin>
        <div className="updateContent">
          <div className="updateContent-field">
            <p className="update-warning">{warning}</p>
            <button onClick={update}>Atualizar</button>
            Nome:
            <input
              type="text"
              onChange={(e) => setNamePost(e.target.value)}
              value={namePost}
            />
            <div>
              Publico
              <input
                type="checkbox"
                onClick={(e) => setPublicPost(e.target.checked)}
                defaultChecked={publicPost ? true : null}
              />
            </div>
            <div>
              Slide
              <input
                type="checkbox"
                onClick={(e) => setSlide(e.target.checked)}
                defaultChecked={slide ? true : null}
              />
              Meio
              <input
                type="checkbox"
                onClick={(e) => setMiddle(e.target.checked)}
                defaultChecked={middle ? true : null}
              />
              Gameplay
              <input
                type="checkbox"
                onClick={(e) => setGameplay(e.target.checked)}
                defaultChecked={gameplay ? true : null}
              />
              Galeria
              <input
                type="checkbox"
                onClick={(e) => setGallery(e.target.checked)}
                defaultChecked={gallery ? true : null}
              />
            </div>
            <NewCategory addCategory={setWord} />
            <select
              value={category}
              onClick={(e) => setCategory(e.target.value)}
            >
              <option>Escolha uma Categoria</option>
              {categories.map((res, i) => (
                <option key={i}>{res.name}</option>
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
                imageHeight: "(auto)",
                // imageUploadUrl: `${base_url}/ckimage`,
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
