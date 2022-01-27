import { base_url } from "../config";

const Blocks = {
  slide: () => {
    return fetch(`${base_url}/posts/slide`).then((res) => res.json());
  },
  middle: () => {
    return fetch(`${base_url}/posts/middle`).then((res) => res.json());
  },
  gameplay: () => {
    return fetch(`${base_url}/posts/gameplay`).then((res) => res.json());
  },
  gallery: () => {
    return fetch(`${base_url}/posts/gallery`).then((res) => res.json());
  },
};

export default Blocks;
