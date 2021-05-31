import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login_Form";
import "./login_page_style.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div className="login-page">
      <LoginForm
        handleOnChange={handleOnChange}
        username={username}
        pass={pass}
      />
    </div>
  );
};
