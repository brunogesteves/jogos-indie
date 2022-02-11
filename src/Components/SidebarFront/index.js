import React from "react";
import { Link } from "react-router-dom";

import "./SidebarFront.css";

import { useQuery } from "@apollo/client";
import { GET_SIDEBAR } from "../../Graphql/Queries";

export default function SidebarFront() {

  const { data } = useQuery(GET_SIDEBAR);

  console.log(data);

  return (
    <div className="sidebar-front-area">
      <Link to={"https://apoia.se/jogosindiebrasil"} target="_blank">
        <img src={"/apoie.jpg"} alt="crowdfunding" />{" "}
      </Link>
      {data &&
        data.getPostsSideBar.map((res, i) => (
          <div key={i}>
            <Link to={`/${res.slug}`}>
              <img src={res.thumb} alt={res} />{" "}
            </Link>
          </div>
        ))}
    </div>
  );
}
