import React, { useState, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";

import "./Login.css";

import { useMutation } from "@apollo/client";
import { AUTHENTICATION } from "../../../Graphql/Mutations";


export default function Login(props) {
  const [userEmail, setUserEmail] = useState("n3586@hotmail.com");
  const [password, setPassWord] = useState("aa");
  const [isLogged, setisLogged] = useState(false);

  const [authentication, { data }] = useMutation(AUTHENTICATION, {
    variables: { email: userEmail, password },
  });
  console.log(data);

  useEffect(() => {
    if (data && data.authentication.successfull) {
      localStorage.setItem("token", data.authentication.token);
      localStorage.setItem("refresh", data.authentication.refresh);
      localStorage.setItem("username", data.authentication.username);
      setisLogged(true);
    }
  }, [data]);

  function AcessAdmin() {
    authentication({
      variables: {
        email: userEmail,
        password: password.toLowerCase(),
      },
    });
  }

  return (
    <>
      {isLogged ? <Redirect to="/admin/posts" /> : null}
      <div className="login-admin">
        <img src={"/1.jpg"} alt="logotype" />
        Login:
        <input
          type="text"
          name="usernameField"
          onChange={(e) => setUserEmail(e.target.value)}
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
        <input type="button" value="ENTRAR" id="getIn-button" onClick={AcessAdmin} />
        <div>
          <Link to="/" className="login-home">
            Home
          </Link>
          <Link to="/" className="login-remember-password">
            Lembrar Senha
          </Link>
        </div>
      </div>
    </>
  );
}
