import React from "react";
import propTypes from 'prop-types';
// TODO: STYLE THIS <------
export const LoginForm = ({ handleOnChange, username, pass }) => {
  return (
    <div>
      <h1>User Login</h1>
      <hr />
      <form>
        <label htmlFor="uname">User Name</label>
        <input
          type="text"
          id="uname"
          name="uname"
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
        <input type="submit" value="Submit" />
        <hr />
        <a href="#!">Forget Password?</a>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  pass: propTypes.string.isRequired
}