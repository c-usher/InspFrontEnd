import React, { useState } from "react";
import propTypes from "prop-types";

// TODO: -----> STYLE THIS PAGE <------
export const LoginForm = ({ formSwitch }) => {
  const [username, setUsername] = useState("");
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
  return (
    <div>
      <h1>User Login</h1>
      <hr />
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleOnChange}
          placeholder="Enter Username"
          required
        />
        <br />
        <label htmlFor="pass">Password</label>
        <input
          type="text"
          id="pass"
          name="pass"
          value={pass}
          onChange={handleOnChange}
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit" value="Submit">
          Log In
        </button>
        <hr />
        <a href="#!" onClick={() => formSwitch("reset")}>
          Forget Password?
        </a>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  formSwitch: propTypes.func.isRequired,
};
