"use client";

import Image from "next/image";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState, Fragment } from "react";
export default function Cartelera({ config, alt, description }) {
  const servicios = Object.keys(config.servicios_adicionales);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            <div className="flex w-full flex-col items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                style={{ backgroundColor: config.color }}
                className={`focus:outline-bluefazty mb-2 flex-shrink-0  rounded-full px-4 py-1 text-base font-medium text-white transition delay-75 duration-75 ease-linear hover:-translate-y-0.5 hover:scale-110 focus:outline-2 focus:outline-offset-2 md:px-4 md:py-1 md:text-lg`}
              >
                <h2>T&C</h2>
              </button>
            </div>
            <div className="flex w-full flex-row justify-center ">
              <ul
                className={`align flex flex-row space-x-4 rounded-full px-1 md:mt-10`}
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {/* Fondo semi-transparente */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>

          {/* Contenedor centrado */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* Caja del diálogo */}
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  {/* Título */}
                  <DialogTitle
                    as="h3"
                    className="text-2xl font-semibold leading-6"
                    style={{ color: "#0070f3" }}
                  >
                    {config.name + " - Terminos y Condiciones"}
                  </DialogTitle>

                  {/* Contenido */}
                  <Description className="mt-4 text-sm text-gray-700">
                    <ul className="list-disc  pl-4 text-xl font-bold">
                      <li>{config.condiciones.postres}</li>
                      <li>{config.condiciones.envases}</li>
                    </ul>
                  </Description>

                  {/* Botones */}
                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      onClick={() => setIsOpen(false)}
                      type="button"
                      style={{ backgroundColor: "#0070f3" }}
                      className="rounded-md px-4 py-2  text-xl font-medium text-white shadow-md transition-opacity hover:opacity-90"
                    >
                      ¡Entendido!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
