import React from "react";

import TopBar from "../Header/Topbar/Topbar";
import Menu from "../Header/Menu";
import Footer from "../Footer/Footer";
import LoggedBar from "../../components/Header/LoggedBar/LoggedBar.view";
import useInfo from "../../Contexts/Context";

export default function Container(props) {
  const { isLogged } = useInfo();
  return (
    <>
      {isLogged && <LoggedBar />}
      <TopBar />
      <Menu />
      <div className="h-auto w-auto">{props.children}</div>
      <Footer />
    </>
  );
}
