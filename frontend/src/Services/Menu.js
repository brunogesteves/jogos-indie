import { base_url } from "../config";

const Menu = {
  menu: () => {
    return fetch(`${base_url}/category`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default Menu;
