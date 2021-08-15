import { Button, TextField } from "@material-ui/core";
import React from "react";

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form className="signup-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
        ></TextField>
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
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
        ></TextField>
      </form>
      <Button id="outlined-basic" variant="outlined">
        Signup
      </Button>
    </div>
  );
}

export default SignUp;
