import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { SIGN_IN } from '../../../Graphql/Queries';
import { LoginProps } from '../../../Utils/types';

export const useLogic = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { data, refetch } = useQuery(SIGN_IN);

  useEffect(() => {
    if (data?.signIn.auth) {
      localStorage.setItem('token', data?.signIn.token);
      setIsLogged(true);
      setErrorMessage(data?.signIn.message);
    } else if (!data?.signIn.auth) {
      setIsLogged(false);
      setErrorMessage(data?.signIn.message);
    }
  }, [data]);

  function signIn(values: LoginProps) {
    refetch({
      input: {
        email: values.email,
        password: values.password.toLowerCase()
      }
    });
  }

  return {
    data: {
      initialValues,
      isLogged,
      errorMessage
    },
    methods: {
      signIn
    }
  };
};
