import React, { useState } from "react";
import "./NewCategory.css";
import Category from "../../Services/Category";

export default function NewCategory(props) {
  const [wordInput, setWordInput] = useState("");

  function addCategory() {
    Category.add(wordInput);
  }

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
                addCategory();
                props.addCategory(wordInput);
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
