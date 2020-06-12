import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "./utils/Api";

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
        props.history.push("/recipies");
      })
      .catch((err) => {
        console.log("Error creating new recipie", err);
      });
  };

  return (
    <>
      <div className="pimg4">
        <div className="ptext">
          <span className="border">Creating: '{recipie.title}'</span>
        </div>
      </div>

      <div className="form-container">
        <form className="edit-form" onSubmit={handleSubmit}>
          <Link className="cancel-link" to="/recipies">
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
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
