import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import "./MenuInput.css";

import { SearchContext } from "../../../../Pages/Contexts/Context";

export default function MenuInput(props) {
  let history = useHistory();

  const { setSearchWord } = useContext(SearchContext);
  const [word, setWord] = useState("");

  function toPageSearch(e) {
    setSearchWord(word);
    history.push(`/search`);
  }

  return (
    <div className="search">
      <input type="text" placeholder="Procurar" onChange={(e) => setWord(e.target.value)} />

      <AiOutlineSearch className="click-search" onClick={() => toPageSearch()} />
    </div>
  );
}
