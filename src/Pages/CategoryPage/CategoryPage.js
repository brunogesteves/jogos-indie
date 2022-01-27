import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CategoryPage.css";

import PostsServices from "../../Services/Posts";

export default function Categorypage() {
  const nameParams = useParams();
  let categoryName = nameParams.category;

  const [slug, setSlug] = useState([]);
  const [thumb, setThumb] = useState([]);

  useEffect(() => {
    PostsServices.category(categoryName).then((res) => {
      setThumb(res.map((res) => res.thumb));
      setSlug(res.map((res) => res.slug));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="categories-body">
      {slug.map((res, i) => (
        <div key={i}>
          <Link to={`/${slug[i]}`}>
            <img src={`/${thumb[i]}`} alt={thumb[i]} />
          </Link>
        </div>
      ))}
    </div>
  );
}
