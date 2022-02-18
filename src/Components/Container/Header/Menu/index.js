import React from "react";

import "./Menu.css";

import MenuBar from "./Menubar";
import MenuInput from "./MenuInput";


export default function Menu(props) {
  
  return (
    <div className="menu-area">
      <MenuBar />
      <div key={1} className="menu-input">
        <MenuInput />
      </div>
    </div>
  );
}
