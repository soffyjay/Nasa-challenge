import React from "react";
import "./CardStyle.css";

const Card = ({ title, image, description, releaseDate, popularity }) => {
  return (
    <div className="card">
      <div>
        <img src={image} className="card-image" />
        <h2>{title}</h2>
        <p>
          Description:
          <p>{description}</p>
        </p>
        <p>Popularity:{popularity}</p>
        <p>Release Date:{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
