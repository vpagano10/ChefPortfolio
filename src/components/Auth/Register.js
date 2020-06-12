import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../utils/Api";
import "../../scss/FormPages.scss";

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post("/api/auth/register", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push("/recipes");
      })
      .catch((err) => {
        console.log("Error registering new user", err);
      });
  };

  return (
    <>
      <div className="auth-form-page-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Sign Up</label>
          <input
            name="username"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
          />
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>{" "}
          here.
        </p>
      </div>
    </>
  );
}
