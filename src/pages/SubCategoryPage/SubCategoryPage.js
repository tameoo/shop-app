import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { GridCards } from "../../components/GridCards";
import { subCategoryData } from "./mock";
import { showFilter } from "../../redux/filterReducer";
import { useDispatch } from "react-redux";
import { SearchForm } from "../../components/SearchForm";
import { CategoryButtons } from "../../components/CategoryButtons/";
import "./SubCategoryPage.css";

const SubCategoryPage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const [isSettingOpen, setSettingOpen] = useState(false);

  return (
    <React.Fragment>
      <Header title={title} />
      <SearchForm />
      <CategoryButtons />
      <div className="setting">
        <div className="setting-option-wrapper">
          <button
            className="setting-option"
            onClick={() => setSettingOpen(!isSettingOpen)}
          >
            <img src="/icons/option.svg" alt="option" />
            <span>По возрастанию цены</span>
            <img
              className={`setting-arrow-down ${
                isSettingOpen && "setting-arrow-down-active"
              }`}
              src="/icons/arrow-down.svg"
              alt="arrow-down"
            />
          </button>
          <ul
            className={`option-list ${isSettingOpen && "option-list-active"}`}
          >
            <li className="option-item">По возрастанию цены</li>
            <li className="option-item">По убыванию цены</li>
            <li className="option-item">По новизне</li>
            <li className="option-item">По популярности</li>
            <li className="option-item">По скидкам</li>
          </ul>
        </div>

        <button
          className="setting-filter"
          onClick={() => dispatch(showFilter(true))}
        >
          <img src="/icons/filter.svg" alt="filter" />
          <span>Фильтры</span>
        </button>
      </div>
      <GridCards render={subCategoryData} />
      <Footer />
    </React.Fragment>
  );
};

export { SubCategoryPage };
