import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./utils/Api";

function ChefList() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    api()
      .get("/api/users")
      .then((res) => {
        console.log("res.data", res.data);
        setChefs(res.data);
      })
      .catch((err) => {
        console.log("Error retrieving recipies", err);
      });
  }, []);

  return (
    <>
      <div className="create-recipe-title">
        <div className="">
          <span className="">Featured Chefs</span>
        </div>
      </div>

      <div className="chef-list">
        {chefs.map((chef) => (
          <Link to={`/chef/${chef.username}`} className="chef-card">
            <p>{chef.username}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ChefList;
