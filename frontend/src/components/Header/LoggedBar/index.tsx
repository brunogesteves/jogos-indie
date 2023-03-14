import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./LoggedBar.css";

import { InfoContext } from "../../../Contexts/Context";

export default function LoggedBar() {
  const { idPost } = useContext(InfoContext);

  return (
    <>
      {localStorage.token ? (
        <div className="logged-top-admin">
          <div>
            Conectado:{" "}
            <Link to="/admin/posts" className="logged-top-admin-item">
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
