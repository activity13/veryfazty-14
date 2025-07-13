"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ImageWithLoader from "./ImageWithLoader";
export default function RestaurantCard({ options, alt, description }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFewOptions, setIsFewOptions] = useState(true);
  const displayOptions = Object.keys(options);
  const listOptions = Object.values(options);

  useEffect(() => {
    if (selectedOption === null && listOptions.length > 0) {
      setSelectedOption(listOptions[0]);
    }
    if (Object.keys(options).length > 3) {
      setIsFewOptions(false);
    }
  }, [selectedOption, listOptions]);

  return (
    <div className="w-full">
      <div
        className={`scrollbar-none flex overflow-x-auto whitespace-nowrap px-2 py-2 md:justify-center ${isFewOptions ? "justify-center" : "justify-start"}`}
      >
        <div className="flex gap-3">
          {displayOptions.map((name, index) => {
            const isSelected = selectedOption === listOptions[index];
            return (
              <button
                key={index}
                onClick={() => setSelectedOption(listOptions[index])}
                className={`focus:outline-bluefazty flex-shrink-0 rounded-full px-4 py-1 text-base font-medium transition delay-75 duration-75 ease-linear hover:-translate-y-0.5 hover:scale-110 focus:outline-2 focus:outline-offset-2 md:px-4 md:py-1 md:text-lg
              ${isSelected ? "bg-bluefazty  text-white" : "bg-gray-100 text-black hover:bg-blue-200"}
              `}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="m-3  max-w-[335px] sm:max-w-xl">
          {selectedOption && (
            <ImageWithLoader src={`/images/${selectedOption}`} alt={alt} />
          )}
        </div>
      </div>
    </div>
  );
}
