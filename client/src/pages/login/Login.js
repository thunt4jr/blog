import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { Container } from "react-bootstrap";

export default function Login() {
  const login = {
    height: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const loginTitle = {
    fontSize: "50px",
  };

  const loginForm = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const loginInput = {
    padding: "10px",
    backgroundColor: "white",
    border: "none",
  };

  const loginButton = {
    marginTop: "20px",
    cursor: "pointer",
    backgroundColor: "lightcoral",
    border: "none",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
  };

  // .loginButton:disabled{
  //   cursor: not-allowed;
  //   background-color: rgb(252, 173, 173);
  // }

  const loginRegisterButton = {
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "teal",
    cursor: "pointer",
    border: "none",
    padding: "10px",
    color: "white",
    borderRadius: "10px",
  };

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <Container style={login}>
      <span style={loginTitle}>Login</span>
      <form style={loginForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          style={loginInput}
          placeholder='Enter your username...'
          ref={userRef}
        />
        <label>Password</label>
        <input
          type='password'
          style={loginInput}
          placeholder='Enter your password...'
          ref={passwordRef}
        />
        <button style={loginButton} type='submit' disabled={isFetching}>
          Login
        </button>
      </form>
      <button style={loginRegisterButton}>
        <Link className='link' to='/register'>
          Register
        </Link>
      </button>
    </Container>
  );
}
