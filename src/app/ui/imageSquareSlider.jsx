"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import DialogFrame from "./dialog";

export default class SimpleSlider extends Component {
  render() {
    const { imageNames } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <Slider {...settings}>
        {imageNames.map((image, index) => (
          <div key={index} className="text-center">
            <Image
              source={`/images/${image}`}
              src={`/images/${image}`}
              height={500}
              width={500}
              alt={`Image ${index + 1}`}
              priority
            />
          </div>
        ))}
      </Slider>
    );
  }
}
