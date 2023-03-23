import React from "react";

import { Link } from "react-router-dom";
import HeaderAdmin from "../../components/Admin/HeaderAdmin/HeaderAdmin.view";
import Footer from "../../components/Footer/Footer";
import useInfo from "../../Contexts/Context";

import Login from "../../Pages/Admin/Login/Login.view";

const Admin: React.FC = (props) => {
  const { isLogged } = useInfo();
  return (
    <>
      <>
        <HeaderAdmin />
        <div className="flex justify-start items-start h-screen">
          <div className="bg-red-500 flex justify-start items-center text-start flex-col w-1/6 h-screen text-white gap-y-2 pt-4 text-xl">
            <div className="w-3/4">
              <Link to="/">Home</Link>
            </div>
            <div className="w-3/4">
              <Link to="/admin/ads">Ads</Link>
            </div>
            <div className="w-3/4 flex justify-start group flex-col">
              <Link to="/admin/posts">Posts</Link>
              <div className="hidden group-hover:block mt-3">
                <Link to="/admin/posts/new">Adicionar novo Post</Link>
              </div>
            </div>
            <div className="w-3/4">
              <Link to="/admin/categories">Categories</Link>
            </div>
          </div>
          <div className="flex justify-center items-start pt-5  w-full h-full ">
            {props.children}
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default Admin;
