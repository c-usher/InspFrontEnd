import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login_Form";
import { PasswordResetForm } from "../../components/password_reset/Password_Reset_Form";
import "./login_page_style.css";

export const LoginPage = () => {
  const [formLoad, setFormLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const formSwitch = (e) => {
    setFormLoad(e);
  };

  return (
    <div className="login-page">
      {formLoad === "login" && <LoginForm formSwitch={formSwitch} />}
      {formLoad === "reset" && <PasswordResetForm formSwitch={formSwitch} />}
    </div>
  );
};
