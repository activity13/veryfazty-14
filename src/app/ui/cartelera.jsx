"use client";

import Image from "next/image";

export default function Cartelera({ config, alt, description }) {
  const servicios = Object.keys(config.servicios_adicionales);

  return (
    <div className="flex justify-center">
      <div
        className={`container flex max-w-[220px] flex-col items-center rounded-xl bg-gradient-to-b from-${config.color}-200 to-${config.color}-50 p-5 md:max-w-[600px] md:flex-row md:justify-center`}
      >
        <div className="flex justify-center md:basis-1/2">
          <Image
            src={`/images/${config.logo}`}
            width={175}
            height={175}
            alt={alt}
            className="rounded"
            description={description}
          />
        </div>
        <div className="m-3 flex h-full flex-col items-center justify-center md:basis-1/2 md:items-start">
          <h1 className="m-2 flex w-full justify-center text-center align-bottom">
            <strong>{config.horarios.publicado}</strong>
          </h1>
          <div className="flex w-full flex-row justify-center ">
            <ul
              className={`flex flex-row space-x-4 rounded-full px-3 py-1 hover:bg-${config.color}-200 md:mt-10`}
            >
              {servicios.map((prop, index) => (
                <li key={index}>
                  <Image
                    src={`/images/${prop}.svg`}
                    width={25}
                    height={25}
                    alt="servicios de restaurante a domicilio Vichayito y Las Pocitas"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
