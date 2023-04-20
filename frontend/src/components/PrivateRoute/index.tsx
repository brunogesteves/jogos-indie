import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsValid(true);
      setLoading(false);
    } else {
      setIsValid(false);
      setLoading(false);
    }
  }, [localStorage]);

  if (loading) {
    return <div>carregabdo</div>;
  } else {
    console.log(444);

    return (
      <Route
        {...rest}
        render={(props) => (isValid ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    );
  }
};

export default PrivateRoute;
