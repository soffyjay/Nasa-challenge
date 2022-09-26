import React from "react";
import "./CardStyle.css";

const Card = ({
  title,
  image,
  description,
  releaseDate,
  popularity,
  onClick,
  moviePoster,
  id,
}) => {
  return (
    <div className="card" onClick={onClick} key={id} data-testid="card">
      <div>
        <img
          src={
            !moviePoster
              ? "https://nasa-movies.netlify.app/image/gallery.png"
              : image
          }
          className="card-image"
        />
        <h2 className="card-title">{title}</h2>
        <p>
          <span className="card-description"> Description:</span>
          <p>{description}</p>
        </p>
        <p className="popularity">
          Popularity:<span className="yellow-text">{popularity}</span>
        </p>
        <p>
          Release Date:<span className="yellow-text">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
