import React from "react";

export const MovieCard = ({ title, description, imageURL, rating }) => {
  const imagePath = `https://image.tmdb.org/t/p/w500${imageURL}`;

  return (
    <div className="movieCard">
      <img src={imagePath} height={400} alt="" />
      <div className="movieInfo">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{rating.toFixed(1)}⭐</p>
      </div>
    </div>
  );
};
