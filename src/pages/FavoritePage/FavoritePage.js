import React from "react";
import { Footer } from "../../components/Footer";
import { GridCards } from "../../components/GridCards";
import { Header } from "../../components/Header";
import "./FavoritePage.css";
import { favorite } from "./mock";

const FavoritePage = () => {
  return (
    <React.Fragment>
      <Header title={"Избранное"} showFavorite={false} />
      <GridCards render={favorite} />
      <Footer />
    </React.Fragment>
  );
};

export { FavoritePage };
