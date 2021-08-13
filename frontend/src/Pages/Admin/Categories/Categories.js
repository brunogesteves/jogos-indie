import React, { useState, useEffect } from "react";

import Admin from "../Admin";

import "./Categories.css";

import NewCategory from "../../../Components/NewCategory/NewCategory";
import CategoryService from "../../../Services/Category";

export default function Categories(props) {
  const [loaded, setLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [word, setWord] = useState([]);

  useEffect(() => {
    CategoryService.get().then((res) => {
      setCategories(res);
      setLoaded(true);
    });
  }, [word]);

  function deleteCategory(name) {
    CategoryService.delete(name);
    setCategories(categories.filter((item) => item === name));
  }

  return loaded ? (
    <div>
      <Admin>
        <div className="category-body">
          <NewCategory addCategory={setWord} />
          {categories.map((res, index) => (
            <div key={index} className="categories">
              {res.name}
              <button onClick={() => deleteCategory(res.name)}>Apagar</button>
            </div>
          ))}
        </div>
      </Admin>
    </div>
  ) : null;
}
