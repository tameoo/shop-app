import React, { useState } from "react";
import "./FavoriteButton.css";

const FavoriteButton = () => {
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!isFavorite);
  };

  return (
    <button type="button" className="card-heart" onClick={toggleFavorite}>
      <img
        className="heart-img"
        src={`/icons/${isFavorite ? "heart-solid" : "heart"}.svg`}
        alt="heart"
      />
    </button>
  );
};

export { FavoriteButton };
