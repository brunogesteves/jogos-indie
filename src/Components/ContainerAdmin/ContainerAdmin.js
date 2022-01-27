import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Logotype from "../../Components/ContainerAdmin/Logotype/Logotype";
import Footer from "./../Footer/Footer";

import { LoginContext } from "../../Pages/Contexts/Context";
import "./ContainerAdmin.css";
var moment = require("moment");

export default function ContainerAdmin(props) {
  const [time, setTime] = useState();
  const { isLogged, setIsLogged } = useContext(LoginContext);

  setInterval(() => {
    const timeNow = moment().format("DD/MM/YYYY HH:mm:ss");
    setTime(timeNow);
  }, 1000);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("logged", false);
    setIsLogged(false);
  }
  return (
    <div>
      {isLogged ? null : <Redirect to="/admin" />}
      <div className="header-admin">
        <div>
          <Logotype />
        </div>
        <div className="header-admin-right">
            <div>Bem-Vindo, {localStorage.getItem("user")}, 
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
