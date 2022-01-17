import { base_url } from "../config";

const SidebarFront = {
  posts: () => {
    return fetch(`${base_url}/posts/random`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default SidebarFront;
