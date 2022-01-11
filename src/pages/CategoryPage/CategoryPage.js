import React from "react";
import { Footer } from "../../components/Footer";
import { GridCards } from "../../components/GridCards";
import { Header } from "../../components/Header";
import { categoryData } from "./mock";

const CategoryPage = () => {
  return (
    <React.Fragment>
      <Header title={"Все категории"} showAdmin={false} />
      <GridCards render={categoryData} />
      <Footer />
    </React.Fragment>
  );
};

export { CategoryPage };
