import React from "react";
import { Link } from "react-router-dom";
import "../scss/About.scss";

export default function About() {
  return (
    <>
      <div className="about-page-container">
        {/*  */}
        <div className="about-page-text-container">
          <div className="about-page-text">
            <h3 className="about-page-title">About</h3>
            <br />
            <p className="about-page-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              <br /> Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
              <br /> Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
          </div>
        </div>

        <div className="card-container">
          <div className="info-card">
            <i class="fas fa-utensils card-icons"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <br />
            <br />
            <Link className="info-card-links" to="/recipes">
              Recipes
            </Link>
          </div>
          <div className="info-card">
            <i class="fas fa-pepper-hot  card-icons"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <br />
            <br />
            <Link className="info-card-links" to="/chefs">
              Chefs
            </Link>
          </div>
          <div className="info-card">
            <i class="fas fa-mug-hot  card-icons"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <br />
            <br />
            <Link className="info-card-links" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
