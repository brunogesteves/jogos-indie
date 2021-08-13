import { base_url } from "../config";

const Category = {
  get: () => {
    return fetch(`${base_url}/category/`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  add: (wordInput) => {
    return fetch(`${base_url}/category`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: wordInput,
      }),
    });
  },
  delete: (name) => {
    return fetch(`${base_url}/category`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
  },
  random: () => {
    return fetch(`${base_url}/category/random`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default Category;
