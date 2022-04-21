import React from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { SliderCard } from "../../components/SliderCard";
import { Footer } from "../../components/Footer";
import { CategoryButtons } from "../../components/CategoryButtons";
import { CustomButton } from "../../components/CustomButton";

import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();

  const onNavigateTo = () => {
    navigate(`/category/Все товары`);
  };

  return (
    <React.Fragment>
      <Header />
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
      <div className="main-page-btn">
        <CustomButton
          text={"Показать все"}
          clazz={"secondary"}
          onPressButton={onNavigateTo}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export { MainPage };
