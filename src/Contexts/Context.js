import React, { createContext, useState } from "react";
var moment = require("moment");

export const InfoContext = createContext("");

export const InfoProvider = ({ children }) => {
  const [time, setTime] = useState();
  const [searchWord, setSearchWord] = useState("");
  const [idPost, setIdPost] = useState("");
  const [isCategoryAdded, setIsCategoryAdded] = useState(false);
  const [username, setUsername] = useState("");

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
        username,
        setUsername,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
