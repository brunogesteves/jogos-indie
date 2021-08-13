import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./LoggedBar.css";

import { LoginContext } from "../../../../Pages/Contexts/Context";
import { IdContext } from "../../../../Pages/Contexts/Context";

export default function LoggedBar() {
  const { isLogged } = useContext(LoginContext);
  const { idPost } = useContext(IdContext);

  return (
    <>
      {isLogged ? (
        <div className="logged-top-admin">
          <div>
            Conectado:{" "}
            <Link to="/admin" className="logged-top-admin-item">
              entrar na administração{" "}
            </Link>
          </div>
          <div>
            {idPost ? (
              <Link
                to={`/admin/updatepost/${idPost}`}
                className="logged-top-admin-item"
              >
                Editar Post
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
