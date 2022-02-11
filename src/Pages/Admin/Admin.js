import React from "react";
import "./Admin.css";

import ContainerAdmin from "../../Components/ContainerAdmin";
import SidebarAdmin from "../../Components/SidebarAdmin";
import Login from "./Login";


export default function Admin(props) {
  

  return (
    <>
  {localStorage.token? 
      <ContainerAdmin>
        <div className="adminBody">
          <div className="sidebar">
            <SidebarAdmin />
          </div>
          <div className="adminContent">{props.children}</div>
        </div>
      </ContainerAdmin>
   
   :    <Login />}
   </>
  )
}

