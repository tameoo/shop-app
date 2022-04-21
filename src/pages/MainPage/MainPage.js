import React from "react";
import { useNavigate } from "react-router-dom";

import { SliderCard } from "../../components/SliderCard";
import { CategoryButtons } from "../../components/CategoryButtons";
import { CustomButton } from "../../components/CustomButton";

import { DefaultLayout } from "../../layouts/default";

import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();

  const onNavigateTo = () => {
    navigate(`/category/Все товары`);
  };

  return (
    <DefaultLayout>
      <div className="main">
        <h1 className="main-title">Название</h1>
        <p className="main-descr">
          Небольшое описание <br /> длиной в две строки
        </p>
        <img
          className="main-img"
          src="/images/shopping-cart.svg"
          alt="shopping-cart"
        />
      </div>
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
    </DefaultLayout>
  );
};

export { MainPage };
