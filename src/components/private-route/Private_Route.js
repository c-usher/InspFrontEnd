import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/Default_Layout";

const isValid = true; //Allows access
export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isValid ? (
          <DefaultLayout>{children} </DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
