import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Register() {
  const register = {
    height: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const registerTitle = {
    fontSize: "50px",
  };

  const registerForm = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  };

  // .registerForm > label {
  //   margin: 10px 0;
  // }

  const registerInput = {
    padding: "10px",
    backgroundColor: "white",
    border: "none",
  };

  const registerButton = {
    marginTop: "20px",
    cursor: "pointer",
    backgroundColor: "teal",
    border: "none",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
  };

  const registerLoginButton = {
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "lightcoral",
    cursor: "pointer",
    border: "none",
    padding: "10px",
    color: "white",
    borderRadius: "10px",
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Container style={register}>
      <span style={registerTitle}>Register</span>
      <form style={registerForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          style={registerInput}
          placeholder='Enter your username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type='text'
          style={registerInput}
          placeholder='Enter your email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          style={registerInput}
          placeholder='Enter your password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={registerButton} type='submit'>
          Register
        </button>
      </form>
      <button style={registerLoginButton}>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </Container>
  );
}
