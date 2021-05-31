import React from "react";
import { FormControl, Button, InputLabel, Input } from "@material-ui/core";

export const LoginForm = () => {
  return (
    <div>
      <h1>User Login</h1>
      <hr />
      <FormControl>
        <InputLabel htmlFor="username">User Name </InputLabel>
        <Input id="username-input" aria-describedby="username-text" required />
        <br />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password </InputLabel>
        <Input id="password-input" aria-describedby="password-text" required />
      </FormControl>
      <FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
      </FormControl>
    </div>
  );
};
