import { base_url } from "../config";

const NewPost = {
  new: (
    namePost,
    content,
    category,
    thumb,
    slugify,
    datetime,
    slide,
    middle,
    gameplay,
    schedule,
    publicpost
  ) => {
    return fetch(`${base_url}/newpost`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        namePost,
        content,
        category,
        thumb,
        slugify,
        datetime,
        slide,
        middle,
        gameplay,
        schedule,
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
