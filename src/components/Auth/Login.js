import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../utils/Api";
import "../../scss/FormPages.scss";

export default function Login() {
  const history = useHistory();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post("/api/auth/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push("/recipes");
      })
      .catch((err) => {
        console.log("Error logging in user", err);
      });
  };

  return (
    <>
      <div className="auth-form-page-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Login</label>
          <input
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="password"
          />
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="form-link" to="/register">
            Sign Up
          </Link>{" "}
          here.
        </p>
      </div>
    </>
  );
}
