import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  CategoryPage,
  MainPage,
  SubCategoryPage,
  DetailPage,
  OrderPage,
} from "./pages";
import { Menu } from "./components/Menu";
import { Filter } from "./components/Filter";
import "./App.css";

const App = () => {
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const isFilterOpen = useSelector((state) => state.filter.isOpen);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:title" element={<SubCategoryPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </Routes>
      {isMenuOpen && <Menu />}
      {isFilterOpen && <Filter />}
    </div>
  );
};

export { App };
