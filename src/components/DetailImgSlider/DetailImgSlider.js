import React from "react";
import { FavoriteButton } from "../FavoriteButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./DetailImgSlider.css";

const DetailImgSlider = ({ slides }) => {
  const sliderSettings = {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="slick-dot-custom"></div>,
  };

  return (
    <Slider {...sliderSettings}>
      {slides.map((item, index) => (
        <div key={index} className="detail-img-wrapper">
          <img className="detail-img" src={item} alt="detail" />
          <FavoriteButton changeSize={true} />
        </div>
      ))}
    </Slider>
  );
};

export { DetailImgSlider };
