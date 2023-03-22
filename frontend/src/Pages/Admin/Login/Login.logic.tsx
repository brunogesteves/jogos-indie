import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { SIGN_IN } from "../../../Graphql/Queries";

export const useLogic = () => {
  const [isLogged, setisLogged] = useState(false);

  const [signInfo, setSignInfo] = useState({
    email: "admin@mail.com",
    password: "123",
  });

  const { data, refetch } = useQuery(SIGN_IN);

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.authentication.token);
      localStorage.setItem("refresh", data.authentication.refresh);
      localStorage.setItem("username", data.authentication.username);
      setisLogged(data);
    }
  }, [data]);

  function signIn() {
    console.log("refetch");

    refetch({
      input: {
        email: signInfo.email,
        password: signInfo.password.toLowerCase(),
      },
    });
  }

  return {
    data: {
      isLogged,
      signInfo,
    },
    methods: {
      signIn,
      setSignInfo,
    },
  };
};
