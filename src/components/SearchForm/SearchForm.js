import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search">
      <form className="form" autoComplete="off">
        <div className="form-controll">
          <input
            className="form-input"
            type="text"
            name="search"
            placeholder="Поиск по названию товара"
          />
          <img src="/icons/search.svg" alt="search" />
        </div>
      </form>
    </div>
  );
};

export { SearchForm };
