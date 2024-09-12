"use client";

import Menu from "next/image";
import { useEffect, useState } from "react";

export default function RestaurantCard({ name, alt, description }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = `/images/${name}`;
    img.onload = () => {
      let maxWidth = 800;
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
            src={`/images/la-k-karta.png`}
            className="img-fluid rounded-top"
            alt={alt}
            description={description}
            height={dimensions.height}
            width={dimensions.width}
            priority={true}
          />
        </div>
      </div>
    </>
  );
}
