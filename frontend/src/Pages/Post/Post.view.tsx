import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container/Container";
import ErrorPage from "../ErrorPage/ErrorPage.view";

import { useLogic } from "./Post.logic";

interface RouteParams {
  post: string;
}

export default function Post() {
  const { data } = useLogic();

  return (
    <>
      {data.data?.frontPostQuery ? (
        <Container>
          <div className="flex justify-between">
            <div
              className="sun-editor-editable bg-red-500"
              dangerouslySetInnerHTML={{
                __html: data.data?.frontPostQuery?.content,
              }}
            />
            <div className="w-3/12 my-2">
              <div className="flex flex-col gap-y-2">
                {data.RandomPosts?.getRandomPosts.map((post, i) => {
                  return (
                    <div>
                      <Link to={`/${post.thumb}`}>
                        <img src={`/${post.thumb}`} alt={post.slug} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
