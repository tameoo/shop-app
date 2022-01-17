import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, icon, clazz, onPressButton }) => {
  return (
    (icon && (
      <button
        className={`custom-btn secondary secondary-icon ${clazz}`}
        onClick={onPressButton}
      >
        <img src={icon} alt="icon" />
        <span>{text}</span>
      </button>
    )) || (
      <button
        className={`custom-btn  ${
          (clazz === "primary" && "primary") ||
          (clazz === "secondary" && "secondary") ||
          (clazz === "prevent" && "prevent") ||
          (clazz === "secondary-borderless" && "secondary-borderless")
        } ${clazz}`}
        onClick={onPressButton}
      >
        {text}
      </button>
    )
  );
};

export { CustomButton };
