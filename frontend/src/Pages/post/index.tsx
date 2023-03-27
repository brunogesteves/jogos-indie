import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Frontpage.css";
// import "social-share-button";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

import Container from "../../components/Container/Container";
import ErrorPage from "../ErrorPage/ErrorPage.view";

// import { useInfo } from "../../Contexts/Context";

import { useQuery } from "@apollo/client";
import { GET_INFO_POST } from "../../Graphql/Queries";

interface RouteParams {
  post: string;
}

interface InfoProps {
  id: number;
  name: string;
  content: string;
}

export default function Post() {
  const nameParams = useParams<RouteParams>();
  let namePage = nameParams.post;

  const [infoPost, setInfoPost] = useState<InfoProps>();
  // const { setIdPost } = useInfo();

  const { data } = useQuery(GET_INFO_POST, { variables: { slug: namePage } });

  useEffect(() => {
    if (data) {
      setInfoPost(data.getInfoPost[0]);
      // setIdPost(data.getInfoPost[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {}, []);

  return (
    <>
      {infoPost ? (
        <Container>
          <div className="front-content">
            <div
              className="sun-editor-editable"
              dangerouslySetInnerHTML={{ __html: infoPost?.content }}
            />
            <div className="front-sidebar">
              Compartilhe nas redes Sociais!!
              <br />
              {/* <Link
                data-module="SocialShareButton"
                data-module-text={`Divulgue ${namePage}`}
                data-module-title={namePage}
                data-module-base-url={`https://www.jogosindie.com.br/${infoPost?.name}`}
                data-module-net="facebook"
              >
                <AiFillFacebook size="2.8em" />
              </Link>
              <Link
                data-module="SocialShareButton"
                data-module-text={`Divulgue ${infoPost?.name}`}
                data-module-title={namePage}
                data-module-base-url={`https://www.jogosindie.com.br/${infoPost?.name}`}
                data-module-net="twitter"
              >
                <AiOutlineTwitter size="2.8em" />
              </Link> */}
            </div>
          </div>
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
