import React from "react";
import "./Tag.css";

const Tag = ({ text, tagCard = true }) => {
  return (
    <div className={`tag ${tagCard && "tag-card"}`}>
      <div className="tag-inner">{text}</div>
    </div>
  );
};

export { Tag };
