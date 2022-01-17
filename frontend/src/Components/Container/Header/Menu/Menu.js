import React from "react";

import "./Menu.css";

import MenuBar from "./Menubar/MenuBar";
import MenuInput from "./MenuInput";
import Drawer from "./Drawer/Drawer";

export default function Menu(props) {
  return (
    <div className="menu-area">
      <MenuBar />
      <div key={1} className="menu-input">
        <MenuInput />
      </div>
      <Drawer />
    </div>
  );
}
