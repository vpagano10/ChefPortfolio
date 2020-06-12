import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "./utils/Api";
import "../scss/FormPages.scss";

export default function CreateRecipe(props) {
  const [recipie, setRecipie] = useState([]);

  const handleChange = (event) => {
    // event.preventDefaul();
    setRecipie({
      ...recipie,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post("/api/posts/create", recipie)
      .then((res) => {
        props.history.push("/recipes");
      })
      .catch((err) => {
        console.log("Error creating new recipie", err);
      });
  };

  return (
    <>
      <div className="create-recipe-title">
        <div className="">
          <span className="">Creating: '{recipie.title}'</span>
        </div>
      </div>

      <div className="form-page-container">
        <form className="edit-form-container" onSubmit={handleSubmit}>
          <Link className="cancel-link" to="/recipes">
            Cancel
          </Link>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Dish Name"
          />
          <label>Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            placeholder="Category of dish"
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Description"
          />
          <label>Image URL</label>
          <input
            type="text"
            name="imgURL"
            onChange={handleChange}
            placeholder="Image URL"
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Your username"
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            placeholder="Locaiton"
          />
          <button className="form-submit-btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
