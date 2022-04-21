import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./ImgSlider.css";

const ImgSlider = ({ slides }) => {
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
    <Slider {...sliderSettings} className="img-slider">
      {slides.map((item, index) => (
        <div key={index} className="img-slider-wrapper">
          <img className="img-slider" src={item} alt="detail" />
        </div>
      ))}
    </Slider>
  );
};

export { ImgSlider };
