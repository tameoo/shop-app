import React from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { Tag } from "../Tag/Tag";
import "./Card.css";

const Card = ({ id, title, price, path, discount, tag, body }) => {
  const tagDiv = [];
  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
        <div className="card-stack">
          <img className="card-img" src={path} alt={title} />
          <FavoriteButton favoriteItem={body} />
          {tag &&
            Object.entries(tag).map((item) => {
              if (item[0] === "discount" || item[0] === "credit") {
                tagDiv.push(item);
                return;
              }

              return <Tag clazz={item[0]} text={item[1]} />;
            })}
          <div className="tag-wrapper">
            {tagDiv.map((item) => (
              <Tag clazz={item[0]} text={item[1]} />
            ))}
          </div>
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
