import React from "react";
import "./Container.css";

import TopBar from "./Header/Topbar/Topbar";
import Menu from "./Header/Menu/Menu";
import Footer from "../Footer/Footer";
import LoggedBar from "./Header/LoggedBar";

export default function Container(props) {
  return (
    <div className="container-body">
      <LoggedBar />
      <TopBar />
      <Menu />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
}
