import React from 'react';

import TopBar from '../Header/Topbar/Topbar';
import Menu from '../Header/Menu';
import Footer from '../Footer/Footer';
import LoggedBar from '../../components/Header/LoggedBar/LoggedBar.view';

export default function Container(props) {
  return (
    <>
      {localStorage.getItem('token') && <LoggedBar />}
      <TopBar />
      <Menu />
      <div className="h-auto w-auto">{props.children}</div>
      <Footer />
    </>
  );
}
