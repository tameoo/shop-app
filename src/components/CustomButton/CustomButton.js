import React from "react";
import "./CustomButton.css";

const CustomButton = ({
  text,
  icon,
  isPrimary,
  isSecondary,
  isPrevent,
  clazz,
  onPressButton,
}) => {
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
          (isPrimary && "primary") ||
          (isSecondary && "secondary") ||
          (isPrevent && "prevent")
        } ${clazz}`}
        onClick={onPressButton}
      >
        {text}
      </button>
    )
  );
};

export { CustomButton };
