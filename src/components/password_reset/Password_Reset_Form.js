import React from "react";
import propTypes from "prop-types";

// TODO: -----> STYLE THIS PAGE <------
export const PasswordResetForm = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitch,
  username,
}) => {
  return (
    <div>
      <h1>Reset Form</h1>
      <hr />
      <form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
        <button type="submit" value="Submit">Reset Password</button>
        <hr />
        <a href="#!" onClick={() => formSwitch("login")}>
          Back To Log In
        </a>
      </form>
    </div>
  );
};

PasswordResetForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnResetSubmit: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
};
