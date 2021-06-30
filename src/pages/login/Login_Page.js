import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login_Form";
import { PasswordResetForm } from "../../components/password_reset/Password_Reset_Form";
import "./login_page_style.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const [pass, setPass] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "pass":
        setPass(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!username || !pass) {
      return alert("Enter All Info Please");
    }
    console.log(username, pass);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      return alert("Please enter your username!");
    }
    console.log(username);
  };

  const formSwitch = (e) => {
    setFormLoad(e);
  };

  return (
    <div className="login-page">
      {formLoad === "login" && (
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formSwitch={formSwitch}
          username={username}
          pass={pass}
        />
      )}
      {formLoad === "reset" && (
        <PasswordResetForm
          handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitch={formSwitch}
          username={username}
        />
      )}
    </div>
  );
};
