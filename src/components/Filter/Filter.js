import React from "react";
import { CustomButton } from "../CustomButton";
import { CustomBox } from "../CustomBox";
import { useDispatch } from "react-redux";
import { showFilter } from "../../redux/filterReducer";
import "./Filter.css";

const Filter = () => {
  const size = ["S", "M", "L", "XL", "2XL", "XXL"];
  const color = [
    "Белый",
    "Черный",
    "Серый",
    "Синий",
    "Желтый",
    "Зеленый",
    "Красный",
    "Фиолетовый",
    "Бежевый",
  ];
  const dispatch = useDispatch();

  return (
    <div className="overlay">
      <div className="filter">
        <div className="filter-inner">
          <div className="filter-header">
            <h2>Фильтры</h2>
            <img
              src="/icons/close.svg"
              alt="close"
              onClick={() => dispatch(showFilter(false))}
            />
          </div>
          <div className="filter-item">
            <h4>Цена</h4>
            <div>Range</div>
          </div>
          <div className="filter-item">
            <h4>Размер</h4>
            <div className="filter-group">
              {size.map((item, index) => (
                <CustomBox key={index} text={item} />
              ))}
            </div>
          </div>
          <div className="filter-item">
            <h4>Цвет</h4>
            <div className="filter-group">
              {color.map((item, index) => (
                <CustomBox key={index} text={item} isColor={true} />
              ))}
            </div>
          </div>
        </div>
        <CustomButton text={"Применить"} clazz={"primary"} />
      </div>
    </div>
  );
};

export { Filter };
