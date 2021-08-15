import React from "react";
import { Button, Link, TextField } from "@material-ui/core";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();

  function handleClick() {
    history.push("/signup");
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="signup-form">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
        ></TextField>
      </form>
      <div className="login-container">
        <Link onClick={handleClick}>Sign Up</Link>
        <Button id="outlined-basic" variant="outlined">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
