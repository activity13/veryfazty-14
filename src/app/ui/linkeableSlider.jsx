"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const { imageNames, goLink } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <Slider {...settings}>
        {imageNames.map((image, index) => (
          <div key={index} className="w-full">
            <a
              className="flex h-full max-w-sm select-none items-center justify-center"
              href={goLink}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                source={`/images/${image}`}
                src={`/images/${image}`}
                height={1000}
                width={1000}
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
