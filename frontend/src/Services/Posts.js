import { base_url } from "../config";

const posts = {
  posts: () => {
    return fetch(`${base_url}/posts`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  schedule: () => {
    return fetch(`${base_url}/schedule`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  delete: (id) => {
    return fetch(`${base_url}/posts`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
      }),
    });
  },
  update: (place, option, id) => {
    return fetch(`${base_url}/posts/`, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        place,
        option,
        id,
      }),
    });
  },

  search: (searchword) => {
    return fetch(`${base_url}/posts/search/${searchword}`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  category: (categoryName) => {
    return fetch(`${base_url}/posts/category/${categoryName}`).then((res) =>
      res.json()
    );
  },
};

export default posts;
