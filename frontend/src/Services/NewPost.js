import { base_url } from "../config";

const NewPost = {
  new: (
    name,
    content,
    category,
    thumb,
    slug,
    schedule,
    datetime,
    slide,
    middle,
    gameplay,
    gallery,
    publicpost
  ) => {
    return fetch(`${base_url}/newpost`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
        category,
        thumb,
        slug,
        schedule,
        datetime,
        slide,
        middle,
        gameplay,
        gallery,
        publicpost,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default NewPost;
