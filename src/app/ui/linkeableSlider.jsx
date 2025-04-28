"use client";
import React, { Component, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const { imageNames } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 12000,
      cssEase: "linear",
    };

    return (
      <Slider {...settings}>
        {imageNames.map((image, index) => (
          <div key={index} className="h-full w-[90%] rounded">
            <a
              href={"https://wa.me/51924380097"}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={`/images/${image}`}
                height={1000}
                width={1000}
                alt={`Image ${index + 1}`}
                priority
                className="rounded"
              />
            </a>
          </div>
        ))}
      </Slider>
    );
  }
}
