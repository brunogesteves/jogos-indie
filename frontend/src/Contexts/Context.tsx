import React, { createContext, useContext, useState } from "react";
import moment from "moment";

type InfoProps = {
  searchWord: string;
  setSearchWord: (c: string) => void;
  idPost: number;
  setIdPost: (c: number) => void;
  isCategoryAdded: boolean;
  setIsCategoryAdded: (c: boolean) => void;
  time: string;
  openDrawer: boolean;
  setOpenDrawer: (c: boolean) => void;
};

export const InfoContext = createContext<InfoProps>({
  searchWord: "",
  setSearchWord: () => {},
  idPost: 0,
  setIdPost: () => {},
  isCategoryAdded: false,
  setIsCategoryAdded: () => {},
  time: "",
  openDrawer: false,
  setOpenDrawer: () => {},
});

export const InfoProvider: React.FC = ({ children }) => {
  const [time, setTime] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const [idPost, setIdPost] = useState<number>(0);
  const [isCategoryAdded, setIsCategoryAdded] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  setInterval(() => {
    const timeNow = moment().format("DD/MM/YYYY HH:mm:ss");
    setTime(timeNow);
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
    setOpenDrawer,
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export default function useInfo() {
  return useContext(InfoContext);
}
