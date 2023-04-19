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
      setLoading(true);
    }
  }, [localStorage]);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => (isValid ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    );
  }
};

export default PrivateRoute;
