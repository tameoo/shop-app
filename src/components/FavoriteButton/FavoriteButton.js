import React, { useState } from "react";
import "./FavoriteButton.css";

const FavoriteButton = ({ changeSize }) => {
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!isFavorite);
  };

  return (
    <button
      type="button"
      className={`card-heart ${changeSize && "card-heart-40px"}`}
      onClick={toggleFavorite}
    >
      <img
        className={`heart-img ${changeSize && "heart-img-20px"}`}
        src={`/icons/${isFavorite ? "heart-solid" : "heart"}.svg`}
        alt="heart"
      />
    </button>
  );
};

export { FavoriteButton };
