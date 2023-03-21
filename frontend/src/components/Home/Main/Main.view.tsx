import React from "react";
import { Link } from "react-router-dom";
import { useLogic } from "./Main.logic";

// import "./Blocks.css";

const Blocks: React.FC = () => {
  const { data } = useLogic();

  return (
    <>
      <div className="flex px-2 pt-4 justify-between max-sm:flex-col">
        <div>
          {data.data?.getMidSection.map((post, i) => {
            return (
              <>
                <div
                  key={i}
                  className={
                    i < 4 ? "hidden" : "flex justify-start items-center mb-4"
                  }
                >
                  <div>
                    <Link to={`/${post.slug}`}>
                      <div>
                        <img
                          src={`/${post.thumb}`}
                          alt={post.name}
                          className="max-sm:w-40"
                        />
                      </div>
                    </Link>
                  </div>
                  <Link to={`/${post.slug}`} style={{ textDecoration: "none" }}>
                    <div className="text-xl text-black font-bold ml-5 max-sm:text-xs">
                      {post.name}
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="">
          {data.data?.getMidSection.map((post, i) => {
            return (
              <>
                <div
                  key={i}
                  className={
                    i > 4 ? "hidden" : "flex justify-start items-center mb-4"
                  }
                >
                  <div>
                    <Link to={`/${post.slug}`}>
                      <div>
                        <img
                          src={`/${post.thumb}`}
                          alt={post.name}
                          className="max-sm:w-40"
                        />
                      </div>
                    </Link>
                  </div>
                  <Link to={`/${post.slug}`} style={{ textDecoration: "none" }}>
                    <div className="text-xl text-black font-bold ml-5 max-sm:text-xs">
                      {post.name}
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="bg-blue-500 max-sm:my-4 text-xs">
          <Link to={"https://apoia.se/jogosindiebrasil"} target="_blank">
            <img src={"/apoie.jpg"} alt="crowdfunding" />{" "}
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
