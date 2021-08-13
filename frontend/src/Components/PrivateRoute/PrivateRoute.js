import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
      setIsValid(true);
      setLoading(false);
    } else {
      setIsValid(false);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          isValid ? <Component {...props} /> : <Redirect to="/admin" />
        }
      />
    );
  }
};

export default PrivateRoute;
