import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { SIGN_IN } from '../../../Graphql/Queries';

export const useLogic = () => {
  const [signInInfo, setSignInfo] = useState({
    email: '',
    password: ''
  });

  const [isLogged, setIsLogged] = useState(false);

  const { data, refetch } = useQuery(SIGN_IN);

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data?.signIn.token);
      setIsLogged(true);
    } else {
      console.log(222);
      setIsLogged(false);
    }
  }, [data]);

  function signIn() {
    refetch({
      input: {
        // email: signInfo.email,
        // password: signInfo.password.toLowerCase(),
        email: 'admin@mail.com',
        password: '123'
      }
    });
  }

  return {
    data: {
      signInInfo,
      isLogged
    },
    methods: {
      signIn,
      setSignInfo
    }
  };
};
