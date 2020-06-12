import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./utils/Api";
import swal from "sweetalert";
import "../scss/Recipes.scss";

export default function Recipes(handleSubmit) {
  const [recipies, setRecipies] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredRecipies, setFilteredRecipies] = useState([]);

  useEffect(() => {
    api()
      .get("/api/posts")
      .then((res) => {
        console.log("res.data", res.data);
        setRecipies(res.data);
        setFilteredRecipies(res.data);
      })
      .catch((err) => {
        console.log("Error retrieving recipies", err);
      });
  }, []);

  handleSubmit = () => {
    api()
      .get("/api/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = () => {
    api()
      .get("/api/posts/:username")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setFilteredRecipies(
      recipies.filter((recipie) =>
        recipie.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const deleteRecipie = (event, recipies) => {
    // event.preventDefault();
    api()
      .delete(`/api/posts/delete/${recipies.id}`)
      .then((res) => {
        console.log("Delete recipie", res);
        api()
          .get("/api/posts")
          .then((res) => {
            setRecipies(res.data);
            setFilteredRecipies(res.data);
          })
          .catch((err) => {
            console.log("Error deleting recipie", err);
          });
      })
      .catch((err) => {
        console.log("Error getting recipie to delete", err);
      });
  };

  if (!recipies) {
    return <h1>Loading...</h1>;
  }
  if (recipies) {
    return (
      <>
        <div className="recipies-page">
          <div>
            <Link to="/createrecipe" className="add-recipie">
              +
            </Link>
            <form>
              <label>Search</label>
              <input
                type="text"
                name="title"
                onChange={handleInputChange}
                value={query}
                tabIndex="0"
                placeholder="Name of dish..."
                autoComplete="off"
              />
            </form>
          </div>
          <div className="recipies-container">
            {filteredRecipies.map((recipies) => (
              <div className="recipie-card" key={recipies.id}>
                <div className="recipie-card-edit-delete">
                  <Link
                    className="edit-link"
                    to={`/editrecipie/${recipies.id}`}
                  >
                    Edit
                  </Link>
                  <p
                    onClick={function () {
                      swal({
                        title: "DELETE",
                        text: "Are you sure you want to delete this recipie?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          const deleteThisRecipie = (e) =>
                            deleteRecipie(e, recipies);
                          deleteThisRecipie();
                          swal("Recipie deleted", {
                            icon: "success",
                          });
                        }
                      });
                    }}
                  >
                    ✖
                  </p>
                </div>
                <span className="recipie-card-top">
                  <h2 className="recipe-title">{recipies.title}</h2>
                  <p>{recipies.category}</p>
                </span>
                <span className="recipie-card-image">
                  <img
                    src={recipies.imgURL}
                    alt={`picture of ${recipies.title}`}
                  />
                </span>
                <span className="recipie-card-description">
                  <p>{recipies.description}</p>
                </span>
                <span className="recipie-card-bottom">
                  <Link className="chef-link" to={`/chef/${recipies.username}`}>
                    {recipies.username}
                  </Link>
                  <p>{recipies.locaiton}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
