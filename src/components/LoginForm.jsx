// LoginForm.js
import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
          setPassword("");
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then(() => {
          navigate("/gallery");
        })
        .catch((error) => {
          alert(error.code);
          setPassword("");
        });
    }
  };

  const handleForgotPassword = () => {
    navigate("/reset");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-white text-8xl font-bold pb-28 transition-all">
        {login ? "Login" : "SignUp"}
      </h1>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          handleSubmit(e, login ? "SignIn" : "SignUp");
        }}
      >
        <input
          className="w-[300px] border-b-2 bg-transparent border-white focus:bg-transparent focus:border-b text-gray-100 focus:border-gray-500 focus:outline-0 caret-white transition duration-500 ease-in-out active:bg-transparent"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="w-[300px] border-b-2 bg-transparent border-white focus:bg-transparent focus:border-b text-gray-100 focus:border-gray-500 focus:outline-0 caret-white transition duration-500 ease-in-out active:bg-transparent"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="flex justify-end">
          <p
            className=" w-max text-sm text-indigo-400  transition hover:text-blue-700 hover:underline hover:cursor-pointer"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>
        </div>

        <button className="text-white p-3 text-xl font-normal bg-indigo-600 justify-center rounded-2xl items-center inline-flex transition hover:bg-indigo-800">
          {login ? "Login" : "SignUp"}
        </button>
        <p className=" text-gray-200 text-sm text-center">
          {login ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            className="text-indigo-400  transition hover:text-blue-700 hover:underline hover:cursor-pointer"
            onClick={() => {
              setLogin(!login);
              setEmail("");
              setPassword("");
            }}
          >
            {login ? "SignUp" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
