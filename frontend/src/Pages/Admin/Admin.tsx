import React from "react";
import "./Admin.css";

import ContainerAdmin from "../../components/ContainerAdmin";
import SidebarAdmin from "../../components/SidebarAdmin";
import Login from "./Login";

const Admin: React.FC = (props) => {
  return (
    <>
      {localStorage.token ? (
        <ContainerAdmin>
          <div className="adminBody">
            <div className="sidebar">
              <SidebarAdmin />
            </div>
            <div className="adminContent">{props.children}</div>
          </div>
        </ContainerAdmin>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Admin;
