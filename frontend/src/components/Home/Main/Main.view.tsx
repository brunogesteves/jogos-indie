import React from 'react';
import { Link } from 'react-router-dom';
import { useLogic } from './Main.logic';

const Blocks: React.FC = () => {
  const { data } = useLogic();

  return (
    <>
      <div className="flex px-2 pt-4 justify-between max-sm:flex-col">
        <div className="w-1/3 max-sm:w-full">
          {data.data?.getMidSection.map((post, i: number) => {
            return (
              <>
                <div key={i} className={i < 4 ? 'hidden' : 'flex justify-start items-center mb-4'}>
                  <div>
                    <Link to={`/${post.slug}`}>
                      <div>
                        <img
                          src={`${process.env.REACT_APP_API_URL_FILES}/${post.thumb}`}
                          alt={post.name}
                          className="w-40"
                        />
                      </div>
                    </Link>
                  </div>
                  <Link to={`/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="text-xl text-black font-bold ml-5 max-sm:text-xs">
                      {post.name}
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-1/3  max-sm:w-full ">
          {data.data?.getMidSection.map((post, i: number) => {
            return (
              <>
                <div key={i} className={i > 4 ? 'hidden' : 'flex justify-start items-center mb-4'}>
                  <div>
                    <Link to={`/${post.slug}`}>
                      <div>
                        <img
                          src={`${process.env.REACT_APP_API_URL_FILES}/${post.thumb}`}
                          alt={post.name}
                          className="w-40"
                        />
                      </div>
                    </Link>
                  </div>
                  <Link to={`/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="text-xl text-black font-bold ml-5 max-sm:text-xs">
                      {post.name}
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className=" max-sm:my-4 text-xs w-1/3 max-sm:w-full max-sm:flex max-sm:justify-center">
          <Link to={'https://apoia.se/jogosindiebrasil'} target="_blank">
            <img src={`${process.env.REACT_APP_API_URL_FILES}/apoie.png`} alt="crowdfunding" />{' '}
          </Link>
          {/* {data?.getPostsSideBar.map((res, i) => (
            <div key={i}>
              <Link to={`/${res.slug}`}>
                <img src={res.thumb} alt={res} />{" "}
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Blocks;
