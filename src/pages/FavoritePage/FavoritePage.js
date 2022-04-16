import React from "react";

import { Footer } from "../../components/Footer";
import { GridCards } from "../../components/GridCards";
import { Header } from "../../components/Header";
import { subCategoryData } from "../SubCategoryPage/mock";

import "./FavoritePage.css";

const FavoritePage = () => {
  return (
    <React.Fragment>
      <Header title={"Избранное"} showFavorite={false} />
      <GridCards render={subCategoryData} />
      <Footer />
    </React.Fragment>
  );
};

export { FavoritePage };
