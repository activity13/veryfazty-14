"use client";

import Menu from "next/image";
import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";

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
    <div className="w-full">
      <div className="flex flex-col items-center p-2">
        <TabGroup className="flex justify-center space-x-4">
          <TabList className="flex gap-4">
            {displayOptions.map((name, index) => (
              <Tab
                key={index}
                onClick={() => {
                  setSelectedOption(listOptions[index]);
                }}
                className="rounded-full 
                px-3 py-1 text-xl font-semibold text-black focus:outline-none 
                data-[hover]:bg-blue-200 
                data-[selected]:bg-bluefazty
                data-[selected]:text-white 
                data-[focus]:outline-white 
                md:text-2xl"
              >
                {name}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
      <div className=" flex justify-center ">
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
    </div>
  );
}
