import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./Frontpage.css";
import "social-share-button";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

import Container from "../../Components/Container";
import SidebarFront from "../../Components/SidebarFront";
import Error from "../ErrorPage";

import { InfoContext } from "../../Contexts/Context";

import { useQuery } from "@apollo/client";
import { GET_INFO_POST } from "../../Graphql/Queries";

export default function Frontpage(props) {
  const nameParams = useParams();
  let name = nameParams.frontpage;
  const { setIdPost } = useContext(InfoContext);

  const { data } = useQuery(GET_INFO_POST, { variables: { slug: name } });

  const postInfo = data && data.getInfoPost[0];
  useEffect(() => {
    setIdPost(postInfo && postInfo.id);
  }, [postInfo, setIdPost]);

  return (
    <Container>
      {postInfo ? (
          <div className="front-content">
            <div
              className="sun-editor-editable"
              dangerouslySetInnerHTML={{ __html: postInfo.content }}
            />
            <div className="front-sidebar">
              Compartilhe nas redes Sociais!!
              <br />
              <Link
                data-module="SocialShareButton"
                data-module-text={`Divulgue ${name}`}
                data-module-title={name}
                data-module-base-url={`https://www.jogosindie.com.br/${postInfo.name}`}
                data-module-net="facebook"
              >
                <AiFillFacebook size="2.8em" />
              </Link>
              <Link
                data-module="SocialShareButton"
                data-module-text={`Divulgue ${postInfo.name}`}
                data-module-title={name}
                data-module-base-url={`https://www.jogosindie.com.br/${postInfo.name}`}
                data-module-net="twitter"
              >
                <AiOutlineTwitter size="2.8em" />
              </Link>
              <SidebarFront />
            </div>
          </div>
      ) : (
        <Error />
      )}
    </Container>
  );
}
