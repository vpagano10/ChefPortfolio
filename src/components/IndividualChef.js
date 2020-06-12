import React, { useState, useEffect } from "react";
import api from "./utils/Api";

function IndividualChef(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    api()
      .get(`/api/posts/${props.match.params.id}`)
      .then((res) => {
        console.log("AAAAAAAA", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error getting individual chef's posts", err);
      });
  }, [props.match.params.id]);

  return (
    <>
      <div className="">
        <div className="">
          <h2>Featured Chef</h2>
        </div>
      </div>

      <div className="recipies-page">
        <div className="recipies-container">
          {data.map((data) => (
            <div className="recipie-card" key={data.id}>
              <span className="recipie-card-top">
                <h2>{data.title}</h2>
                <p>{data.category}</p>
              </span>
              <span className="recipie-card-image">
                <img src={data.imgURL} alt={`picture of ${data.title}`} />
              </span>
              <span className="recipie-card-description">
                <p>{data.description}</p>
              </span>
              <span className="recipie-card-bottom">
                <p className="chef-link">{data.username}</p>
                <p>{data.locaiton}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IndividualChef;
