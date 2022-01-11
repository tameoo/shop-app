import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomSlider } from "../CustomSlider";
import { mockSlides } from "./mock";
import "./SliderCard.css";

const SliderCard = ({ title }) => {
  const navigate = useNavigate();

  const openMore = () => {
    navigate(`/category/${title}`);
  };

  const uniqueId = (new Date().getTime() / Math.random())
    .toString(16)
    .replace(".", "");

  return (
    <section className="slider-card">
      <div className="slider-card-header">
        <h3>{title}</h3>
        <button className="link-btn" onClick={openMore}>
          <span>Перейти</span>
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
      <CustomSlider id={uniqueId} slides={mockSlides} />
    </section>
  );
};

export { SliderCard };
