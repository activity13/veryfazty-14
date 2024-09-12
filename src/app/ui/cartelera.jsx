"use client";

import Image from "next/image";

export default function Cartelera({ config }) {
  const servicios = Object.keys(config.servicios_adicionales);

  console.log(servicios);
  console.log(config);
  return (
    <div className="flex justify-center">
      <div className="container flex max-w-[800px] flex-col items-center md:flex-row md:justify-center">
        <div className="flex justify-center md:basis-1/2">
          <Image src={`/images/${config.logo}`} width={175} height={175} />
        </div>
        <div className="m-3 flex h-full flex-col items-center justify-center">
          <h1 className="flex  align-bottom">{config.horarios.publicado}</h1>
          <div className="flex flex-row">
            <ul className="m-3 flex flex-row space-x-4">
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
