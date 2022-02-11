import React, {  useContext } from "react";
import { Redirect } from "react-router-dom";
import Logotype from "./Logotype/Logotype";
import Footer from "../Footer/Footer";

import { InfoContext } from "../../Contexts/Context";
import "./ContainerAdmin.css";

export default function ContainerAdmin(props) {
  const { time } = useContext(InfoContext);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }
  return (
    <div>
      {localStorage.token ? null : <Redirect to="/admin" />}
      <div className="header-admin">
        <div>
          <Logotype />
        </div>
        <div className="header-admin-right">
          <div>
            Bem-Vindo, {localStorage.username},
            <input type="button" value="Sair" size="20" onClick={() => logout()} />
          </div>
          {time}
        </div>
      </div>
      {props.children}
      <Footer />
    </div>
  );
}
