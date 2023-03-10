import React, { createContext, useContext, useState } from "react";
var moment = require("moment");

export type InfoProps = {
  searchWord: string;
  setSearchWord: (c: string) => void;
  idPost: number;
  setIdPost: (c: number) => void;
  isCategoryAdded: boolean;
  setIsCategoryAdded: (c: boolean) => void;
  time: string;
  openDrawer: string;
  setOpenDrawer: (c: string) => void;
};

export const InfoContext = createContext<InfoProps>({
  searchWord: "",
  setSearchWord: () => {
    //
  },
  idPost: 0,
  setIdPost: () => {
    //
  },
  isCategoryAdded: false,
  setIsCategoryAdded: () => {
    //
  },
  time: "",
  openDrawer: "",
  setOpenDrawer: () => {
    //
  },
});

const InfoProvider: React.FC = ({ children }) => {
  const [time, setTime] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const [idPost, setIdPost] = useState<number>(0);
  const [isCategoryAdded, setIsCategoryAdded] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<string>("");

  setInterval(() => {
    const timeNow = moment().format("DD/MM/YYYY HH:mm:ss");
    setTime(timeNow);
  }, 1000);

  return (
    <InfoContext.Provider
      value={{
        searchWord,
        setSearchWord,
        idPost,
        setIdPost,
        isCategoryAdded,
        setIsCategoryAdded,
        time,
        openDrawer,
        setOpenDrawer,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;

export function useInfo() {
  const useInfo = useContext(InfoContext);
  return useInfo;
}
