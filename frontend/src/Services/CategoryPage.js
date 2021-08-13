import { base_url } from "../config";

const CategoryPage = {
  posts: (name) => {
    console.log("name: ", name);
    return fetch(`${base_url}/cateogry/${name}`).then((res) => res.json());
  },
};

export default CategoryPage;
