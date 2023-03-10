import React from "react";
import { Link, useParams } from "react-router-dom";

import "./CategoryPage.css";

import SidebarFront from "../../components/SidebarFront";

import Container from "../../components/Container";
import { useQuery } from "@apollo/client";
import { GET_POSTS_FROM_CATEGORY } from "../../Graphql/Queries";

interface RouteParams {
  category: string;
}

interface CategoryInfo {
  slug: string;
  thumb: string;
}

interface CategoryData {
  getPostsfromCategory: CategoryInfo[];
}

export default function CategoryPage() {
  const nameParams = useParams<RouteParams>();
  let CategoryName = nameParams.category;

  const { data } = useQuery<CategoryData>(GET_POSTS_FROM_CATEGORY, {
    variables: { nameCategory: CategoryName },
  });

  console.log(data);
  
  return (
    <Container>
      <div className="category-area">
        <div className="category-content">
          {data &&
            data.getPostsfromCategory.map((res, i) => {
              const { thumb, slug } = res;
              return (
                <div key={i} className="search-content-items">

                  <Link to={`/${slug}`}>
                    <img src={`/${thumb}`} alt={slug} />
                  </Link>
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
