import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';
// import ErrorPage from '../ErrorPage/ErrorPage.view';

import { useLogic } from './Post.logic';
import ClipLoader from 'react-spinners/ClipLoader';

import NotFoundPage from '../ErrorPage/ErrorPage.view';
import useInfo from '../../Contexts/Context';

export default function Post() {
  const { idPost } = useInfo();
  const { data } = useLogic();

  const override: CSSProperties = {
    display: 'block',
    margin: '10px auto',
    borderColor: 'red'
  };

  return (
    <Container>
      {!data ? (
        <ClipLoader
          color="red"
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {idPost === undefined ? (
            <NotFoundPage />
          ) : (
            <div className="flex max-sm:flex-col">
              <div
                className="sun-editor-editable "
                dangerouslySetInnerHTML={{
                  __html: data.contentPost?.getOnePost?.content
                }}
              />
              <div className="w-3/12 my-2 max-sm:w-full ">
                <div className="flex flex-col gap-y-2 ">
                  {data.randomPosts?.getRandomPosts.map((post, i: number) => {
                    return (
                      <div key={i}>
                        <Link to={`/${post.slug}`}>
                          <img
                            src={`${process.env.REACT_APP_API_URL_FILES}/${post.thumb}`}
                            alt={post.slug}
                            className="max-sm:w-full"
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
