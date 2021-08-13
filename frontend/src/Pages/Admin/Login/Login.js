import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import "./Login.css";

import { LoginContext } from "../../Contexts/Context";
import Auth from "../../../Services/Auth";

export default function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassWord] = useState("");
  const [initialState, setInitialState] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);

  function verifyLogin() {
    Auth.authenticate(user, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", res.name);
        setIsLogged(true);
        setInitialState(true);
      })
      .catch((error) => {
        console.log("Erro na volta");
      });
  }

  return (
    <>
      {initialState && isLogged ? <Redirect to="/admin" /> : null}
      <div className="login-admin">
        <img src={"/1.jpg"} alt="logotype" />
        Login:
        <input
          type="text"
          name="usernameField"
          onChange={(e) => setUser(e.target.value)}
          size="30"
        />
        <br /> <br />
        Senha:
        <input
          type="password"
          name="passwordField"
          onChange={(e) => setPassWord(e.target.value)}
          size="30"
        />
        <input
          type="button"
          value="ENTRAR"
          id="getIn-button"
          onClick={() => verifyLogin()}
        />
        <div>
          <Link to="/" className="login-home">
            Hom
          </Link>
          <Link to="/" className="login-remember-password">
            Lembrar Senha
          </Link>
        </div>
      </div>
    </>
  );
}
