import React, { useContext, useLayoutEffect, useState } from "react";
import "./Admin.css";

import ContainerAdmin from "../../Components/ContainerAdmin/ContainerAdmin";
import SidebarAdmin from "../../Components/SidebarAdmin/SidebarAdmin";
import Login from "./Login/Login";

import { LoginContext } from "../Contexts/Context";

import Auth from "../../Services/Auth";

export default function Admin(props) {
  const [release, setRelease] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);

  useLayoutEffect(() => {
    Auth.confirm().then((res) => {
      setIsLogged(res.auth);
      if (res.auth && isLogged) {
        setRelease(true);
        load();
      } else {
        setRelease(true);
        load();
      }
    });
    //eslint-disable-next-line
  }, [isLogged]);

  function load() {
    if (isLogged) {
      return (
        <ContainerAdmin>
          <div className="adminBody">
            <div className="sidebar">
              <SidebarAdmin />
            </div>
            <div className="adminContent">{props.children}</div>
          </div>
        </ContainerAdmin>
      );
    } else {
      return <Login />;
    }
  }

  return <>{release ? load() : null}</>;
}
