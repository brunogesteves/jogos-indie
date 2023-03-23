import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { SIGN_IN } from "../../../Graphql/Queries";
import useInfo from "../../../Contexts/Context";

export const useLogic = () => {
  const { setUsername, setUserEmail, setIsLogged, isLogged } = useInfo();

  const [signInfo, setSignInfo] = useState({
    email: "",
    password: "",
  });

  const { data, refetch } = useQuery(SIGN_IN);

  useEffect(() => {
    if (data) {
      setUserEmail(data.signIn.email);
      setUsername(data.signIn.name);
      setIsLogged(true);
    }
  }, [data]);

  function signIn() {
    refetch({
      input: {
        // email: signInfo.email,
        // password: signInfo.password.toLowerCase(),
        email: "admin@mail.com",
        password: "123",
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
