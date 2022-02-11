import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin";

import "./Posts.css";

import { GET_LIST_POSTS } from "../../../Graphql/Queries";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_POST, UPDATE_INPUT } from "../../../Graphql/Mutations";

export default function Posts() {
  const { data, refetch } = useQuery(GET_LIST_POSTS);

  const [deletePost, { data: isErased }] = useMutation(DELETE_POST);
  const [updateOption, { data: isUpdated }] = useMutation(UPDATE_INPUT);

  useEffect(() => {
    if (
      (isErased && isErased.deletePost.successfull) ||
      (isUpdated && isUpdated.deletePost.successfull)
    ) {
      refetch();
    }
  }, [isErased, isUpdated]);

  return (
    <>
      <Admin>
        <ul>
          {data &&
            data.getListPosts.map((res, i) => {
              return (
                <div key={i} className="posts">
                  <div>
                    <Link
                      to={`/admin/updatepost/${res.id}`}
                      key={i}
                      className="posts-name"
                      style={{ textDecoration: "none" }}
                    >
                      {res.name}
                    </Link>
                  </div>
                  <div>{res.schedule}</div>
                  <div>
                    <span>Slide</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        updateOption({
                          variables: { id: res.id, input: "slide", info: e.target.checked },
                        })
                      }
                      defaultChecked={res.slide ? true : null}
                    />
                  </div>
                  <div>
                    <span>Meio</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        updateOption({
                          variables: { id: res.id, input: "middle", info: e.target.checked },
                        })
                      }
                      defaultChecked={res.middle ? true : null}
                    />
                  </div>
                  <div>
                    <span>Gameplay</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        updateOption({
                          variables: { id: res.id, input: "gameplay", info: e.target.checked },
                        })
                      }
                      defaultChecked={res.gameplay ? true : null}
                    />
                  </div>

                  <div>
                    <span>Público</span>
                    <input
                      type="checkbox"
                      onClick={(e) =>
                        updateOption({
                          variables: { id: res.id, input: "publicpost", info: e.target.checked },
                        })
                      }
                      defaultChecked={res.publicPost ? true : null}
                    />
                  </div>
                  <button onClick={() => deletePost({ variables: { id: res.id } })}>Apagar</button>
                </div>
              );
            })}
        </ul>
      </Admin>
    </>
  );
}
