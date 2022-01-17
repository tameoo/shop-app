import React from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { Tag } from "../Tag/Tag";
import "./Card.css";

const Card = ({ id, title, price, path, discount, tag, showButton = true }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
        <div className="card-stack">
          <img className="card-img" src={path} alt={title} />
          {showButton && <FavoriteButton />}
          {tag && <Tag text={tag} />}
        </div>
        <p className="card-title">{title}</p>
        {price && (
          <div className="card-price-block">
            <span className="card-price">{price} ₸</span>
            {discount && <span className="card-discount">{discount} ₸</span>}
          </div>
        )}
      </div>
    </Link>
  );
};

export { Card };
