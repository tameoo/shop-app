import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { showFilter } from "../../redux/filterReducer";
import { useDispatch } from "react-redux";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { GridCards } from "../../components/GridCards";
import { subCategoryData } from "./mock";
import { SearchForm } from "../../components/SearchForm";
import { CategoryButtons } from "../../components/CategoryButtons/";

import "./SubCategoryPage.css";

const SubCategoryPage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header title={title} />
      <SearchForm />
      <div className="setting">
        <Option />
        <button
          className="setting-filter"
          onClick={() => dispatch(showFilter(true))}
        >
          <img src="/icons/filter.svg" alt="filter" />
          <span>Фильтры</span>
        </button>
      </div>
      <CategoryButtons buttons={["Все", "Женщинам", "Мужчинам", "Детям"]} />
      <GridCards render={subCategoryData} />
      <Footer />
    </React.Fragment>
  );
};

export { SubCategoryPage };

const Option = () => {
  const [isOptionOpen, setOptionOpen] = useState(false);
  const [isActiveOption, setActiveOption] = useState("По популярности");
  const option = [
    "По возрастанию цены",
    "По убыванию цены",
    "По новизне",
    "По популярности",
    "По скидкам",
  ];

  const chooseItem = (item) => {
    setOptionOpen(false);
    setActiveOption(item);
  };

  return (
    <div className="setting-option-wrapper">
      <button
        className="setting-option"
        onClick={() => setOptionOpen(!isOptionOpen)}
      >
        <img src="/icons/option.svg" alt="option" />
        <span>{isActiveOption}</span>
        <img
          className="setting-arrow-down"
          src={`${
            isOptionOpen
              ? "/icons/arrow-down-blue.svg"
              : "/icons/arrow-down.svg"
          }`}
          alt="arrow-down"
        />
      </button>
      <ul className={`option-list ${isOptionOpen && "option-list-active"}`}>
        {option.map((item) => (
          <li
            key={item}
            className={`option-item ${
              item === isActiveOption ? "option-item-active" : ""
            }`}
            onClick={() => chooseItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
