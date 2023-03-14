import React, { useContext } from "react";
// import "./Container.css";

import TopBar from "../Header/Topbar/Topbar";
import Menu from "../Header/Menu";
import Footer from "../Footer/Footer";

import { InfoContext } from "../../Contexts/Context";

export default function Container(props) {
  const { setOpenDrawer } = useContext(InfoContext);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      {/* <LoggedBar /> */}

      <TopBar />
      <Menu />
      <div className="h-auto w-auto">{props.children}</div>
      <Footer />
    </>
  );
}
