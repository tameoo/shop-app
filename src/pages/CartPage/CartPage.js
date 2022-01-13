import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./CartPage.css";

const CartPage = () => {
  return (
    <React.Fragment>
      <Header title={"Корзина"} showCart={false} />
      <Footer />
    </React.Fragment>
  );
};

export { CartPage };
