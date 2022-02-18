import React, { useContext } from "react";
import "./Container.css";

import TopBar from "./Header/Topbar/Topbar";
import Menu from "./Header/Menu";
import Footer from "../Footer/Footer";
import LoggedBar from "./Header/LoggedBar";
import MenuDrawer from "./Header/Menu/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { InfoContext } from "../../Contexts/Context";

export default function Container(props) {
  const { setOpenDrawer } = useContext(InfoContext);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  return (
    <div className="container-body">
      <div className="open-drawer">
        <IconButton
          onClick={handleDrawerOpen}
          sx={{
            backgroundColor: "red",
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <LoggedBar />
      <TopBar />
      <Menu />
      <div className="content">{props.children}</div>
      <Footer />
      <MenuDrawer />
    </div>
  );
}
