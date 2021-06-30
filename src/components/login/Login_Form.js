import React from "react";
import propTypes from "prop-types";

// TODO: -----> STYLE THIS PAGE <------
export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitch,
  username,
  pass,
}) => {
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
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitch: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  pass: propTypes.string.isRequired,
};
