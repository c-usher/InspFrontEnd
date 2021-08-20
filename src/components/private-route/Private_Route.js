import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { fetchNewAccessJWT } from "../../api/userApi";
import { DefaultLayout } from "../../layout/Default_Layout";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { loginSuccess } from "../login/loginSlice";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };
    !user._id && dispatch(getUserProfile());
    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("InspectApp") &&
      updateAccessJWT();
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
