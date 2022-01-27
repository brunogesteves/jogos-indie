import { base_url } from "../config";

const Windows = {
  images: (id, name) => {
    return fetch(`${base_url}/images`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
      }),
    });
  },
  thumbs: () => {
    return fetch(`${base_url}/images/thumbs`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default Windows;
