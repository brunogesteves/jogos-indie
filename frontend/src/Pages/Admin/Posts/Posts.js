import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Admin from "./../Admin";

import "./Posts.css";
import PostsService from "../../../Services/Posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [slide, setSlide] = useState("");
  const [gameplay, setGameplay] = useState("");
  const [middle, setMiddle] = useState("");
  const [gallery, setGallery] = useState("");
  const [publicPost, setPublicPost] = useState("");
  const [id, setId] = useState("");
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    PostsService.posts().then((res) => {
      setPosts(res.map((res) => res.name));
      setSlide(res.map((res) => res.slide));
      setMiddle(res.map((res) => res.middle));
      setGameplay(res.map((res) => res.gameplay));
      setGallery(res.map((res) => res.gallery));
      setPublicPost(res.map((res) => res.publicpost));
      setId(res.map((res) => res.id));
    });
  }, []);

  useEffect(() => {
    PostsService.schedule().then((res) => {
      setSchedule(res.map((res) => res.date));
    });
  }, []);

  function deletePost(id) {
    PostsService.schedule(id);
    setPosts(posts.filter((item) => item !== deletePost));
  }

  function updateOption(place, option, id) {
    PostsService.update(place, option, id);
  }

  console.log(gallery);

  return (
    <>
      <Admin>
        <ul>
          {posts.map((res, i) => {
            return (
              <div key={i} className="posts">
                <div>
                  <Link
                    to={`/admin/updatepost/${id[i]}`}
                    key={i}
                    className="posts-name"
                    style={{ textDecoration: "none" }}
                  >
                    {res}
                  </Link>
                </div>
                <div>{schedule[i]}</div>
                <div>
                  <span>Slide</span>
                  <input
                    type="checkbox"
                    onClick={(e) =>
                      updateOption("slide", e.target.checked, id[i])
                    }
                    defaultChecked={slide[i] ? true : null}
                  />
                </div>
                <div>
                  <span>Meio</span>
                  <input
                    type="checkbox"
                    onClick={(e) =>
                      updateOption("middle", e.target.checked, id[i])
                    }
                    defaultChecked={middle[i] ? true : null}
                  />
                </div>
                <div>
                  <span>Gameplay</span>
                  <input
                    type="checkbox"
                    onClick={(e) =>
                      updateOption("gameplay", e.target.checked, id[i])
                    }
                    defaultChecked={gameplay[i] ? true : null}
                  />
                </div>
                <div>
                  <span>Galeria</span>
                  <input
                    type="checkbox"
                    onClick={(e) =>
                      updateOption("gallery", e.target.checked, id[i])
                    }
                    defaultChecked={gallery[i] ? true : null}
                  />
                </div>
                <div>
                  <span>Público</span>
                  <input
                    type="checkbox"
                    onClick={(e) =>
                      updateOption("publicpost", e.target.checked, id[i])
                    }
                    defaultChecked={publicPost[i] ? true : null}
                  />
                </div>
                <button onClick={() => deletePost(id[i])}>Apagar</button>
              </div>
            );
          })}
        </ul>
      </Admin>
    </>
  );
}
