import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("Password", password, "Email:", email);


  const registerUser = async () => {
    const response = await fetch(
      "https://didactic-space-orbit-vjj5v7px5qqf6gw4-3001.app.github.dev/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      navigate('/login');
    } else {
      console.log("Error:", data);
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Fill out with your information to REGISTER onto our page</h1>
      <form
        onSubmit={(e) => {
            if (email != "" && password != "") {
          e.preventDefault();
          registerUser();
            } else (alert("Fields cannot be empty"))
        }}
      >
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
};
