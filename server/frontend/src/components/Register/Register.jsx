import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const register_url = window.location.origin + "/djangoapp/registration";

  const register = async (e) => {
    e.preventDefault();

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
        firstName,
        lastName,
        email,
      }),
    });

    const json = await res.json();

    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = "/";
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <>
      <Header />
      <div className="register_container">
        <form className="submit_panel" onSubmit={register}>
          <input
            className="input_field"
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            className="input_field"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="input_field"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="input_field"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            className="input_field"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input className="submit" type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

export default Register;