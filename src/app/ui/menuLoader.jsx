"use client";

import Menu from "next/image";
import { useEffect, useState } from "react";

export default function RestaurantCard({ name, alt, description }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    setWindowSize({
      width: window.width,
    });
    const img = new Image();
    img.src = `/images/${name}`;

    img.onload = () => {
      let maxWidth = windowSize.width;
      let width = img.naturalWidth;
      let height = img.naturalHeight;

      // Limitar el max width
      if (width > maxWidth) {
        width = maxWidth;
      }

      setDimensions({ width: width, height: height });
    };
  }, [name]);

  return (
    <>
      <div className="container flex w-full justify-center ">
        <div className="m-3 max-w-[335px] sm:max-w-xl">
          <Menu
            src={`/images/${name}`}
            className="img-fluid rounded-top"
            alt={alt}
            description={description}
            height={dimensions.height}
            width={dimensions.width}
          />
        </div>
      </div>
    </>
  );
}
