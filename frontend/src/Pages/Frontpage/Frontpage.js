import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./Frontpage.css";
import "social-share-button";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

import SidebarFront from "../../Components/SidebarFront/SidebarFront";
import Error from "./../ErrorPage/ErrorPage";
import FrontpagePosts from "../../Services/FrontPage";

import { IdContext } from "./../Contexts/Context";

export default function Frontpage(props) {
  const nameParams = useParams();
  let name = nameParams.frontpage;

  const [publicpost, setPublicpost] = useState(true);
  const [content, setContent] = useState("");
  const { setIdPost } = useContext(IdContext);

  useEffect(() => {
    FrontpagePosts.posts(name).then((res) => {
      setPublicpost(!!res.data);
      if (res.data) {
        setContent(res.data.content);
        setIdPost(res.data.id);
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <>
      {publicpost ? (
        <div className="front-area">
          <div className="front-content">
            <div
              className="sun-editor-editable"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="front-sidebar">
              Compartilhe nas redes Sociais!!
              <br />
              <Link
                data-module="SocialShareButton"
                data-module-text={`Divulgue ${name}`}
                data-module-title={name}
                data-module-base-url={`https://www.jogosindie.com.br/${name}`}
                data-module-net="facebook"
              >
                <AiFillFacebook size="2.8em" />
              </Link>
              <Link
                data-module="SocialShareButton"
                data-module-text={`Divulgue ${name}`}
                data-module-title={name}
                data-module-base-url={`https://www.jogosindie.com.br/${name}`}
                data-module-net="twitter"
              >
                <AiOutlineTwitter size="2.8em" />
              </Link>
              <SidebarFront />
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}
