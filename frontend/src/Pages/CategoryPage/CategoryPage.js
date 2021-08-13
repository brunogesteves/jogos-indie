import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CategoryPage.css";

import CategoryPage from "../../Services/CategoryPage";

export default function Categorypage() {
  const nameParams = useParams();
  let name = nameParams.category;

  const [slug, setSlug] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    CategoryPage.posts(name)
      .then((res) => res.json())
      .then((res) => {
        setImages(res.map((res) => res.images));
        setSlug(res.map((res) => res.slug));
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="categories-body">
      {slug.map((res, i) => (
        <div key={i}>
          <Link to={`/${slug[i]}`}>
            <img src={`/${images[i]}`} alt={images[i]} />
          </Link>
        </div>
      ))}
    </div>
  );
}
