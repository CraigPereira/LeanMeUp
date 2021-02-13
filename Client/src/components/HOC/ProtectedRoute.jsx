import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { component: Component, isAuthenticated, location, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
