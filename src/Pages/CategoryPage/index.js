import React from "react";
import { Link, useParams } from "react-router-dom";


import "./CategoryPage.css";

import SidebarFront from "../../Components/SidebarFront";

import Container from "../../Components/Container";
import { useQuery } from "@apollo/client";
import { GET_POSTS_FROM_CATEGORY } from "../../Graphql/Queries";

export default function CategoryPage() {
  const nameParams = useParams();
  let CategoryName = nameParams.category;

  const { data } = useQuery(GET_POSTS_FROM_CATEGORY, { variables: { nameCategory: CategoryName } });
  return (
    <Container>
      <div className="search-area">
        <div className="search-content">
        
          {data &&
            data.getPostsfromCategory.map((res, i) => {
              const { thumb, name, slug, category } = res;
              return (
                <div key={i} className="search-content-items">
                  <Link style={{ textDecoration: "none", color: "black" }} to={`/${slug}`}>
                    {name}
                  </Link>
                  <Link to={`/${slug}`}>
                    <img src={thumb} alt={name} />
                  </Link>
                  Categoria: {category}
                </div>
              );
            })}
        </div>
        <div className="search-sidebar">
          <SidebarFront />
        </div>
      </div>
    </Container>
  );
}
