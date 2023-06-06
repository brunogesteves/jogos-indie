import { createContext } from 'react';

type InfoProps = {
  searchWord: string;
  setSearchWord: (c: string) => void;
  idPost: number | undefined;
  setIdPost: (c: number) => void;
  isCategoryAdded: boolean;
  setIsCategoryAdded: (c: boolean) => void;
  time: string;
  openDrawer: boolean;
  setOpenDrawer: (c: boolean) => void;
  isLogged: boolean;
  setIsLogged: (c: boolean) => void;
  userEmail: string;
  setUserEmail: (c: string) => void;
  username: string;
  setUsername: (c: string) => void;
};

export const InfoContext = createContext<InfoProps>({
  searchWord: '',
  setSearchWord: () => {},
  idPost: undefined,
  setIdPost: () => {},
  isCategoryAdded: false,
  setIsCategoryAdded: () => {},
  time: '',
  openDrawer: false,
  setOpenDrawer: () => {},
  isLogged: false,
  setIsLogged: () => {},
  userEmail: '',
  setUserEmail: () => {},
  username: '',
  setUsername: () => {}
});
