import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from "../Card";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CustomSlider.css";

class CustomSlider extends Component {
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { slides } = this.props;
    const sliderSettings = {
      arrows: false,
      dots: false,
      draggable: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    return (
      <React.Fragment>
        <Slider ref={(slider) => (this.slider = slider)} {...sliderSettings}>
          {slides.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              path={item.path}
              discount={"25990"}
            />
          ))}
        </Slider>
        <div className="slider-arrows">
          <button onClick={() => this.previous()}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              className="slider-arrow svg-inline--fa fa-chevron-left fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>
          </button>
          <button onClick={() => this.next()}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              className="slider-arrow svg-inline--fa fa-chevron-right fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              ></path>
            </svg>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export { CustomSlider };
