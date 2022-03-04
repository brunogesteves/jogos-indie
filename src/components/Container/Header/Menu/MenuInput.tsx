import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import "./MenuInput.css";

import { InfoContext } from "../../../../Contexts/Context";

export default function MenuInput(props) {
  let history = useHistory();

  const { setSearchWord } = useContext(InfoContext);
  const [word, setWord] = useState("");

  function toPageSearch() {
    setSearchWord(word);
    history.push(`/procurar`);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Procurar"
        onChange={(e) => setWord(e.target.value)}
      />

      <AiOutlineSearch
        className="click-search"
        onClick={() => toPageSearch()}
      />
    </div>
  );
}
