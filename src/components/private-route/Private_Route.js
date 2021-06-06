import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/Default_Layout";

const isValid = true;
export const PrivateRoute = ({ children, ...rest }) => {
  return <Route render={() => (isValid ?  <DefaultLayout>{children} </DefaultLayout>: <Redirect to="/" />)} />;
};