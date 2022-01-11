import { CustomButton } from "../../components/CustomButton/";
import React from "react";
import "./CategoryButtons.css";

const CategoryButtons = () => {
  return (
    <div className="category-group">
      <CustomButton
        text={"Все"}
        isPrimary={true}
        clazz={"category-btn-padding"}
      />
      <CustomButton
        text={"Женщинам"}
        isSecondary={true}
        clazz={"category-btn-padding"}
      />
      <CustomButton
        text={"Мужчинам"}
        isSecondary={true}
        clazz={"category-btn-padding"}
      />
      <CustomButton
        text={"Детям"}
        isSecondary={true}
        clazz={"category-btn-padding"}
      />
    </div>
  );
};

export { CategoryButtons };
