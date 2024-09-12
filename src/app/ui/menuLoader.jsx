"use client";

import Menu from "next/image";
import { useEffect, useState } from "react";

export default function RestaurantCard({ options, alt, description }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selectedOption, setSelectedOption] = useState(null);

  const displayOptions = Object.keys(options);
  const listOptions = Object.values(options);

  useEffect(() => {
    if (selectedOption === null && listOptions.length > 0) {
      setSelectedOption(listOptions[0]);
    }

    const img = new Image();
    img.src = `/images/${selectedOption}`;
    img.onload = () => {
      // console.log(selectedOption);
      let maxWidth = 800;
      let width = img.naturalWidth;
      let height = img.naturalHeight;
      // Limitar el max width
      if (width > maxWidth) {
        width = maxWidth;
      }
      setDimensions({ width: width, height: height });
    };
  }, [selectedOption, listOptions]);

  return (
    <>
      <div className="flex flex-col items-center p-2">
        <ul className="flex justify-center space-x-4">
          {displayOptions.map((name, index) => (
            <li key={index}>
              <button
                className={`
                  ${
                    listOptions[index] === selectedOption
                      ? "border-spacing-1 p-2 text-[35px] text-blue-700"
                      : "border-spacing-1 p-2 text-[34px]"
                  }`}
                onClick={() => {
                  setSelectedOption(listOptions[index]);
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container flex w-full justify-center ">
        <div className="m-3 max-w-[335px] sm:max-w-xl">
          <Menu
            src={`/images/${selectedOption}`}
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
