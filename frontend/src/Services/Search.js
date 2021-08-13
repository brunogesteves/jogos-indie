import { base_url } from "../config";

const searchPost = {
  search: (searchWord) => {
    fetch(`${base_url}/posts/search`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
         word: searchWord,
      }),
    })
      .then((res) => res.json())
      
  },
};

export default searchPost;