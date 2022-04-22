import React from "react";
import { useNavigate } from "react-router-dom";

import { SliderCard } from "../../components/SliderCard";
import { CategoryButtons } from "../../components/CategoryButtons";
import { CustomButton } from "../../components/CustomButton";
import { DotsSlider } from "../../components/DotsSlider";

import { DefaultLayout } from "../../layouts/default";

import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();

  const onNavigateTo = () => {
    navigate(`/category/Все товары`);
  };

  const slides = [
    {
      title: "Название",
      text: "Небольшое описание <br /> длиной в две строки",
      img: "/images/shopping-cart.svg",
    },
    {
      title: "Название",
      text: "Небольшое описание <br /> длиной  в две строки",
      img: "/images/shopping-cart.svg",
    },
    {
      title: "Название",
      text: "Небольшое описание <br /> длиной в две строки",
      img: "/images/shopping-cart.svg",
    },
  ];

  return (
    <DefaultLayout>
      <DotsSlider>
        {slides.map((item, index) => (
          <div key={index} className="intro">
            <h1 className="intro-title">{item.title}</h1>
            <p className="intro-descr">
              <div
                dangerouslySetInnerHTML={{
                  __html: item.text,
                }}
              />
            </p>
            <img
              className="intro-img"
              src={`${item.img}`}
              alt="shopping-cart"
            />
          </div>
        ))}
      </DotsSlider>

      <SliderCard title={"Новинки"} />
      <SliderCard title={"Товары со скидкой"} />
      <CategoryButtons
        buttons={["Футболки", "Рубашки", "Штаны", "Обувь", "Другое"]}
      />
      <SliderCard title={"Футболки"} />
      <div className="intro-page-btn">
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
