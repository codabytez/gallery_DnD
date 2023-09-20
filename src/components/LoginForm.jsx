// LoginForm.js
import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "SignUp") {
      createUserWithEmailAndPassword(database, email, password)
        .then(() => {
          navigate("/gallery");
        })
        .catch((error) => {
          alert(error.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then(() => {
          navigate("/gallery");
        })
        .catch((error) => {
          alert(error.code);
        });
    }
  };

  const handleForgotPassword = () => {
    navigate("/reset");
  };

  return (
    <div>
      <p>
        <button onClick={() => setLogin(!login)}>
          {" "}
          {login ? "SignUp" : "SignIn"}
        </button>
      </p>
      <h1>{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "SignIn" : "SignUp")}>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" type="text" placeholder="Password" />
        <br />
        <button onClick={handleForgotPassword}>Forgot Password?</button>
        <br />

        <button>{login ? "SignIn" : "SignUp"}</button>
      </form>
    </div>
  );
};

export default LoginForm;
