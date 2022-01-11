import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { Card } from "../Card";
import "./CustomSlider.css";

const CustomSlider = ({ id, slides }) => {
  const [slider] = useState(
    new Glide(`#${id}`, {
      type: "slider",
      perTouch: 1,
      perView: 4,
      peek: { before: 0, after: 100 },
      bound: true,
      breakpoints: {
        1024: {
          perView: 3,
        },
        700: {
          perView: 2,
        },
        500: {
          perView: 1,
        },
      },
    })
  );

  useEffect(() => {
    slider.mount();

    return () => slider.destroy();
  }, [slider]);

  return (
    <div id={id} className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {slides.map((item) => (
            <li key={item.id} className="glide__slide">
              <Card
                id={item.id}
                title={item.title}
                price={item.price}
                path={item.path}
                discount={"25990"}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { CustomSlider };
