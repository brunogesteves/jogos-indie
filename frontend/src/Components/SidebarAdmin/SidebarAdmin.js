import React from "react";
import { Link } from "react-router-dom";

import "./SidebarAdmin.css";

export default function Sidebar() {
  return (
    <div className="sidebar-area">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/admin/ads">Ads</Link>
      </div>
      <div className="menu-posts">
        <Link to="/admin/posts">Posts</Link>
        <div className="sub-menu-posts">
          <Link to="/admin/posts/new">Adicionar novo Post</Link>
        </div>
      </div>
      <div>
        <Link to="/admin/categorias">Categorias</Link>
      </div>
    </div>
  );
}
