import React, { useState, useContext, useEffect } from "react";
import "./NewCategory.css";

import { useMutation } from "@apollo/client";
import { NEW_CATEGORY } from "../../Graphql/Mutations";

import { InfoContext } from "../../Contexts/Context";

export default function NewCategory(props) {
  const [wordInput, setWordInput] = useState("");
  const [createCategory, { data: isAdded }] = useMutation(NEW_CATEGORY);
  const { setIsCategoryAdded } = useContext(InfoContext);

  useEffect(() => {
    if (isAdded) {
      setIsCategoryAdded(isAdded.createCategory.successfull);
    }
  }, [isAdded, setIsCategoryAdded]);

  return (
    <div className="new-category">
      Digite a nova categoria:
      <input
        type="text"
        name="name"
        value={wordInput}
        onChange={(e) => (e ? setWordInput(e.target.value) : null)}
      />
      <button
        onClick={
          wordInput
            ? () => {
                createCategory({ variables: { name: wordInput } });
                setWordInput("");
              }
            : null
        }
      >
        Adicionar
      </button>
    </div>
  );
}
