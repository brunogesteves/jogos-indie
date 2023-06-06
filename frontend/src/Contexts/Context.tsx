import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { InfoContext } from './InfoContext';
import { UserInfo } from '../Utils/types';

export const InfoProvider: React.FC = ({ children }) => {
  const [time, setTime] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const [idPost, setIdPost] = useState<number | undefined>(undefined);
  const [isCategoryAdded, setIsCategoryAdded] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const tokenDecoded: UserInfo = jwt_decode(localStorage.getItem('token') as string);

      setUsername(tokenDecoded?.name);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  setInterval(() => {
    const date = new Date();
    const dateFormat = new Intl.DateTimeFormat('pt-BR', {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });

    setTime(dateFormat.format(date));
  }, 1000);

  const value = {
    searchWord,
    setSearchWord,
    idPost,
    setIdPost,
    isCategoryAdded,
    setIsCategoryAdded,
    time,
    openDrawer,
    isLogged,
    setIsLogged,
    setOpenDrawer,
    userEmail,
    setUserEmail,
    username,
    setUsername
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export default function useInfo() {
  return useContext(InfoContext);
}
