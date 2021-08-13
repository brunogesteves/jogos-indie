import { base_url } from "../config";

const Auth = {
  authenticate: (user, password) => {
    return fetch(`${base_url}/sign/in`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
  confirm: () => {
    return fetch(`${base_url}/sign/`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};

export default Auth;
