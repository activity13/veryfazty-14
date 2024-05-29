import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promoBros from "../../../public/images/promo-bros.png";
import promoBros2 from "../../../public/images/promo-bros-2.png";

export default class SimpleSlider extends Component {
  render() {
    const goPromo1 = "https://web.whatsapp.com";
    const images = [promoBros, promoBros2];
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="max-w-sm">
            <a
              className="flex h-full max-w-sm items-center justify-center"
              href={goPromo1}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                source={image}
                src={image}
                height={390}
                width={350}
                alt={`Image ${index + 1}`}
                priority
              />
            </a>
          </div>
        ))}
      </Slider>
    );
  }
}
