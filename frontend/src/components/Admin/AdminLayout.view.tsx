import React from 'react';

import { Link } from 'react-router-dom';
import HeaderAdmin from '../../components/Admin/HeaderAdmin/HeaderAdmin.view';
import Footer from '../../components/Footer/Footer';

const Admin: React.FC = (props) => {
  return (
    <>
      <HeaderAdmin />
      <div className="flex justify-start items-start h-full bg-red-500">
        <div className=" flex justify-start items-center text-start flex-col w-1/6 h-screen text-white gap-y-2 pt-4 text-xl">
          <div className="w-3/4">
            <Link to="/">Home</Link>
          </div>
          <div className="w-3/4">
            <Link to="/admin/ads">Ads</Link>
          </div>
          <div className="w-3/4 flex justify-start group flex-col">
            <Link to="/admin">Posts</Link>
            <div className="hidden group-hover:block mt-3">
              <Link to="/admin/posts/newpost">Adicionar novo Post</Link>
            </div>
          </div>
          <div className="w-3/4">
            <Link to="/admin/categories">Categories</Link>
          </div>
        </div>
        <div className="flex justify-center items-start  w-full h-screen bg-red-100">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
