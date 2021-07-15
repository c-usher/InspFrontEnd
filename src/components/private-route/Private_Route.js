import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { fetchNewAccessJWT } from "../../api/userApi";
import { DefaultLayout } from "../../layout/Default_Layout";
import { loginSuccess } from "../login/loginSlice";

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };
    updateAccessJWT();
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? (
          <DefaultLayout>{children} </DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
