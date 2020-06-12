import React from "react";
import { Link } from "react-router-dom";
import SVGImage from "./SVGImage";
import "../scss/Style.scss";

export default function Home() {
  return (
    <div className="content-container">
      <div className="text-content-container">
        <div className="main-title-text">Find great</div>
        <div className="main-title-text-2">Recipes</div>
        <div className="main-info-text">
          Are you searching for new and great recipes
          <br /> that you'll love? Search either by recipe name or if you
          <br /> have a favorite chef search for them specifically.
        </div>
        <div>
          <Link to="/recipes" className="home-btn">
            Start Now
          </Link>
        </div>
      </div>

      <div className="svg-container">
        <SVGImage />
      </div>
    </div>
  );
}
