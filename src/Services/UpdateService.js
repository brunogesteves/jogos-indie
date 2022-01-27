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
    name,
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
    console.log("res-services: ", category);
    return fetch(`${base_url}/updatepost/${id}`, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
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
