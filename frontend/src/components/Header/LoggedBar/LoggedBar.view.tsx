import React from "react";
import { Link } from "react-router-dom";

import "./LoggedBar.css";

import useInfo from "../../../Contexts/Context";

export default function LoggedBar() {
  const { idPost } = useInfo();

  return (
    <>
      <div className="logged-top-admin">
        <div>
          Conectado:{" "}
          <Link to="/admin" className="logged-top-admin-item">
            entrar na administração{" "}
          </Link>
        </div>
        <div>
          {/* {idPost ? (
              <Link
                to={`/admin/updatepost/${idPost}`}
                className="logged-top-admin-item"
              >
                Editar Post
              </Link>
            ) : null} */}
        </div>
      </div>
    </>
  );
}
