import React from 'react';

import AdHeader from './AdHeader/AdHeader.view';
import Logotype from './Logotype/Logotype.view';
import { FiMenu } from 'react-icons/fi';
import useInfo from '../../../Contexts/Context';

export default function Topbar() {
  const { openDrawer, setOpenDrawer } = useInfo();

  return (
    <div className="flex justify-evenly items-center bg-black max-sm:flex-col pr-5 py-5 max-sm:pr-0">
      <FiMenu
        onClick={() => setOpenDrawer(!openDrawer)}
        color="#fff"
        className="cursor-pointer hidden max-lg:block max-lg:absolute max-lg:left-3 max-lg:top-9"
      />
      <Logotype />
      <AdHeader />
    </div>
  );
}
