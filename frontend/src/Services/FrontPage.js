import { base_url } from "../config";

const FrontpagePosts = {
  posts: (name) => {
    return fetch(`${base_url}/frontpage/${name}`)
      .then((res) => res.json())
      
  },
};

export default FrontpagePosts;