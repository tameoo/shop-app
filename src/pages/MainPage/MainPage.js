import React from "react";
import { Header } from "../../components/Header";
import { SliderCard } from "../../components/SliderCard";
import { Footer } from "../../components/Footer";
import { CategoryButtons } from "../../components/CategoryButtons";
import "./MainPage.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header showAdmin={true} />
      <main className="main">
        <h1 className="main-title">Название</h1>
        <p className="main-descr">
          Небольшое описание <br /> длиной в две строки
        </p>
        <img
          className="main-img"
          src="/images/shopping-cart.svg"
          alt="shopping-cart"
        />
      </main>
      <SliderCard title={"Новинки"} />
      <SliderCard title={"Товары со скидкой"} />
      <CategoryButtons
        buttons={["Футболки", "Рубашки", "Штаны", "Обувь", "Другое"]}
      />
      <SliderCard title={"Футболки"} />
      <Footer />
    </React.Fragment>
  );
};

export { MainPage };
