import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {
  CategoryPage,
  MainPage,
  SubCategoryPage,
  DetailPage,
  OrderPage,
  FavoritePage,
  CartPage,
} from "./pages";
import { Menu } from "./components/Menu";
import { Filter } from "./components/Filter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Alert } from "./components/Alert";

import "./App.css";

const App = () => {
  const isMenuOpen = useSelector((state) => state.menu.isOpen);
  const isFilterOpen = useSelector((state) => state.filter.isOpen);
  const isAlertOpen = useSelector((state) => state.alert.isOpen);

  return (
    <div className="container">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:title" element={<SubCategoryPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {isAlertOpen && <Alert />}
      {isMenuOpen && <Menu />}
      {isFilterOpen && <Filter />}
    </div>
  );
};

export { App };
