import { base_url } from "../config";

const UpdateService = {
  category: () => {
    return fetch(`${base_url}/category`)
      .then((res) => res.json(res))
      .then((res) => {
        return res;
      });
  },
  getInfo: (idNumber) => {
    return fetch(`${base_url}/updatepost/${idNumber}`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  update: (
    id,
    namePost,
    content,
    category,
    thumb,
    slug,
    slide,
    middle,
    gameplay,
    gallery,
    publicPost
  ) => {
    return fetch(`${base_url}/updatepost/${id}`, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        namePost,
        content,
        category,
        thumb,
        slug,
        slide,
        middle,
        gameplay,
        gallery,
        publicPost,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default UpdateService;
