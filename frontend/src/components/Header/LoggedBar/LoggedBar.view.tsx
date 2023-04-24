import React from 'react';
import { Link } from 'react-router-dom';

import useInfo from '../../../Contexts/Context';

export default function LoggedBar() {
  const { idPost } = useInfo();

  return (
    <>
      <div className="bg-red-500 h-9 capitalize text-white flex  items-center gap-x-10 ps-4">
        <div>
          Conectado:{' '}
          <Link to="/admin" className="text-white ">
            entrar na administração{' '}
          </Link>
        </div>
        <div>
          {idPost ? (
            <Link to={`/admin/updatepost/${idPost}`} className="text-white">
              Editar Post
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
