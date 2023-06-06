import React from 'react';
import Logotype from '../Logotype/Logotype.view';

import useInfo from '../../../Contexts/Context';
import { useHistory } from 'react-router-dom';

export default function HeaderAdmin() {
  let history = useHistory();

  const { time, username } = useInfo();

  return (
    <div>
      <div className="flex bg-black justify-around items-center text-white h-40 text-lg">
        <div>
          <Logotype />
        </div>
        <div className="text-4xl">{time}</div>
        <div className="">
          <div className="flex flex-col items-center">
            Bem-Vindo, {username},
            <input
              type="button"
              value="Sair"
              size={20}
              className="cursor-pointer text-xl bg-white text-black w-20 text-center mt-3 rounded-md"
              onClick={() => {
                localStorage.removeItem('token');
                history.push(`/login`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
