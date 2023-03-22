import React from "react";
import "./Admin.css";

import SidebarAdmin from "../../components/SidebarAdmin";
import Login from "./Login/Login.view";

const Admin: React.FC = (props) => {
  return (
    <>
      {localStorage.token ? (
        <div className="adminBody">
          <div className="sidebar">
            <SidebarAdmin />
          </div>
          <div className="adminContent">{props.children}</div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Admin;
