import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="register-container">
      {showSignup ? (
        <div className="form">
          <h3>Signup</h3>
          <TextField
            className="input"
            required
            id="outlined-required"
            label="First Name"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Last Name"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Email"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Password"
          />
          <Button className="btn" variant="contained">
            Signup
          </Button>
          <span onClick={() => setShowSignup(!showSignup)}>
            Already have an account? Login
          </span>
        </div>
      ) : (
        <div className="form">
          <h3>Login</h3>
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Email"
          />
          <TextField
            className="input"
            required
            id="outlined-required"
            label="Password"
          />
          <Button className="btn" variant="contained">
            Login
          </Button>
          <span onClick={() => setShowSignup(!showSignup)}>
            Don't have an account? Signup
          </span>
        </div>
      )}
    </div>
  );
};

export default Register;
