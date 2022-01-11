import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, price, path, discount, showButton = true }) => {
  const navigate = useNavigate();

  const openDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="card" onClick={openDetail}>
      <div className="card-stack">
        <img className="card-img" src={path} alt={title} />
        {showButton && (
          <button className="card-heart">
            <img src="/icons/heart.svg" alt="heart" />
          </button>
        )}
      </div>
      <p className="card-title">{title}</p>
      {price && (
        <div className="card-price-block">
          <span className="card-price">{price} ₸</span>
          {discount && <span className="card-discount">{discount} ₸</span>}
        </div>
      )}
    </div>
  );
};

export { Card };
