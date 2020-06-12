import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./utils/Api";

function EditRecipie(props) {
  const [recipie, setRecipie] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    imgURL: "",
    username: "",
    location: "",
  });

  useEffect(() => {
    api()
      .get(`/api/posts/${props.match.params.id}`)
      .then((res) => {
        setRecipie(res.data);
      })
      .catch((err) => {
        console.log("Error getting recipie by id", err);
      });
  }, [props.match.params.id]);

  const handleChange = (event) => {
    event.preventDefault();
    setRecipie({
      ...recipie,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .put(`/api/posts/update/${props.match.params.id}`, recipie)
      .then((res) => {
        props.history.push("/recipes");
      })
      .catch((err) => {
        console.log("Error editing recipie", err);
      });
  };

  return (
    <>
      <div className="form-page-container">
        <form className="edit-form-container" onSubmit={handleSubmit}>
          <Link className="cancel-link" to="/recipes">
            Cancel
          </Link>
          <label className="form-labels">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder={`Title: ${recipie.title}`}
          />
          <label>Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            placeholder={`Category: ${recipie.category}`}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder={`Description: ${recipie.description}`}
          />
          <label>Image URL</label>
          <input
            type="text"
            name="imgURL"
            onChange={handleChange}
            placeholder={`Image URL: ${recipie.imgURL}`}
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder={`Username: ${recipie.username}`}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            placeholder={`Locaiton: ${recipie.location}`}
          />
          <button className="form-submit-btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default EditRecipie;
