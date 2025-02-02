"use client";

import Image from "next/image";
import tableStand from "../../../public/images/table_small.png";
import Slider from "./linkeableSlider";
import { useState, useEffect } from "react";

export const MobilePromos = (imageNames) => {
  return (
    <div
      className=" mt-5 
          pb-10 pt-2 text-center md:h-[50vh] md:pb-0"
    >
      <div className="flex h-full items-center  justify-center md:mt-[-30px]">
        <div className="max-w-[80%] rounded-lg ">
          <div className="max-w-sm">
            <Slider
              alt="veryfazty table presents offers"
              imageNames={imageNames.imageNames}
              className="absolute flex justify-center rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const DesktopPromos = (imageNames) => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="max-w-sm">
        <Slider imageNames={imageNames.imageNames} />
        <Image
          src={tableStand}
          height={116}
          width={416}
          alt="veryfazty table presents offers"
          className=" -z-50 -mt-24 select-none" // Ajuste de margen para posicionar la imagen correctamente
        />
      </div>
    </div>
  );
};

export default function Promos() {
  const desktopImageNames = ["promo-bros.png", "promo-bros-2.png"];
  const mobileImageNames = ["brosPromoMobile.jpg", "brosPromoMobile2.jpg"];

  const [isMobile, setIsMobile] = useState(false);
  const [imageNames, setImageNames] = useState(desktopImageNames);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 766.39;
      setIsMobile(isMobileView);
      setImageNames(isMobileView ? mobileImageNames : desktopImageNames);
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl lg:text-4xl">PROMOCIONES</h1>

      {isMobile ? (
        <MobilePromos imageNames={imageNames} />
      ) : (
        <DesktopPromos imageNames={imageNames} />
      )}
    </div>
  );
}
