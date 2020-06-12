import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import "../scss/Style.scss";

function Navbar() {
  return (
    <>
      <div className="page-background">
        <div className="page-container">
          <h1 className="top-title">
            Chef<span className="color-swap">Portfolio</span>
          </h1>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="nav-container">
            <div>
              <ul className="home-nav-left">
                <Link to="/" className="home-nav-link">
                  Home
                </Link>
                <Link to="/about" className="home-nav-link">
                  About
                </Link>
                <Link to="/login" className="home-nav-link">
                  Login
                </Link>
                <Link to="/register" className="home-nav-link">
                  Sign Up
                </Link>
              </ul>
            </div>
            <div>
              <ul className="home-nav-right">
                <li className="home-nav-social">
                  <i class="fab fa-facebook"></i>
                </li>
                <li className="home-nav-social">
                  <i class="fab fa-instagram"></i>
                </li>
                <li className="home-nav-social">
                  <i class="fab fa-pinterest"></i>
                </li>
                <li className="home-nav-social">
                  <i class="fab fa-twitter"></i>
                </li>
                <Link to="/contact" className="home-nav-social-contact">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </>
  );
}

export default withRouter(Navbar);
