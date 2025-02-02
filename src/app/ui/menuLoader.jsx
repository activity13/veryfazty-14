"use client";

import Menu from "next/image";
import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";

export default function RestaurantCard({ options, alt, description }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const displayOptions = Object.keys(options);
  const listOptions = Object.values(options);

  useEffect(() => {
    if (selectedOption === null && listOptions.length > 0) {
      setSelectedOption(listOptions[0]);
    }
  }, [selectedOption, listOptions]);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center p-2">
        <TabGroup className="flex justify-center space-x-4">
          <TabList className="flex gap-4">
            {displayOptions.map((name, index) => (
              <Tab
                key={index}
                onClick={() => setSelectedOption(listOptions[index])}
                className="rounded-full px-3 py-1 text-xl font-semibold text-black focus:outline-none 
                data-[hover]:bg-blue-200 data-[selected]:bg-bluefazty data-[selected]:text-white md:text-2xl"
              >
                {name}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
      <div className="flex justify-center">
        <div className="m-3  max-w-[335px] sm:max-w-xl">
          {selectedOption && (
            <Menu
              src={`/images/${selectedOption}`}
              alt={alt}
              description={description}
              layout="responsive" // Ajusta automáticamente la relación de aspecto
              width={800} // Limita el ancho máximo
              height={450} // Relación de aspecto 16:9
              objectFit="cover" // Mantiene la relación de aspecto
              priority={true}
              quality={80}
            />
          )}
        </div>
      </div>
    </div>
  );
}
