"use client";

import Image from "next/image";
import tableStand from "../../../public/images/table_small.png";
import Slider from "./linkeableSlider";
import { useState, useEffect } from "react";

// Configuración de los banners de promociones
// Se definen los tipos: "whatsapp" (externo) o "internal" (redirección a página)
const PROMOS_DATA = [
  // {
  //   id: "2x1-dos-por-uno-en-pizzas-la-k-promocion-martes",
  //   desktopImage: "banner_2x1_la_k.webp",
  //   mobileImage: "banner_mini_2x1_la_k.webp",
  //   type: "whatsapp",
  //   whatsappNumber: "51924380097",
  //   whatsappMessage: "Hola, me gustaria pedir la promo martes de 2x1 en pizzas de La K",
  //   internalLink: "",
  //   alt: "En La K los martes son de dos por uno en pizzas. Aplica terminos y condiciones.",
  // },
  {
    id: "pizzas-la-k-promocion-martes",
    desktopImage: "la_k_pizza_pan_al_ajo_v.webp",
    mobileImage: "la_k_pizza_pan_al_ajo.webp",
    type: "whatsapp",
    whatsappNumber: "51924380097",
    whatsappMessage: "Hola, me gustaria pedir la promo del martes en pizzas de La K",
    internalLink: "",
    alt: "En La K los martes son de promoción. Aplica terminos y condiciones.",
  },
  {
    id: "viernes-de-chifa-playa-palmeras",
    desktopImage: "banner_pp_chifa_d.webp",
    mobileImage: "banner_pp_chifa.webp",
    type: "internal",
    whatsappNumber: "",
    whatsappMessage: "",
    internalLink: "/playa-palmeras-vichayito?carta=Chifa",
    alt: "En Playa Palmeras los viernes son de chifa.",
  },
  {
    id: "promo-bros-1",
    desktopImage: "promo-bros.png",
    mobileImage: "brosPromoMobile.jpg",
    type: "whatsapp",
    whatsappNumber: "51924380097",
    whatsappMessage:
      "Hola Veryfazty, me gustaría ordenar la promo de Bros Food: 2 Pizzas (Pepperoni + Americana o Caprese) por S/47.",
    internalLink: "",
    alt: "Promo de Pizzas Bros",
  },
  {
    id: "promo-bros-2",
    desktopImage: "promo-bros-2.png",
    mobileImage: "brosPromoMobile2.jpg",
    type: "whatsapp",
    whatsappNumber: "51924380097",
    whatsappMessage:
      "Hola Veryfazty, me gustaría ordenar la promo de Bros Food: 2 Hamburguesas clásicas por S/33.",
    internalLink: "",
    alt: "Conoce más de Brosfood",
  },
];

export const MobilePromos = ({ promos }) => {
  return (
    <div className="mb-4 mt-6 px-4 text-center">
      <div className="flex justify-center">
        <div className="w-full max-w-[320px]">
          <Slider promos={promos} isMobile={true} />
        </div>
      </div>
    </div>
  );
};

export const DesktopPromos = ({ promos }) => {
  return (
    <div className="relative mb-6 mt-8 flex flex-col items-center justify-center">
      <div className="relative z-10 w-full max-w-[340px]">
        <Slider promos={promos} isMobile={false} />
      </div>
      <div className="z-0 -mt-24 flex w-full select-none justify-center opacity-90 transition-opacity duration-300">
        <Image
          src={tableStand}
          height={116}
          width={416}
          alt="Stand Veryfazty"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default function Promos() {
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Validación inicial

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Evitar desajustes de hidratación en Next.js (Hydration Mismatch)
  if (!mounted) return null;

  return (
    <section className="flex flex-col items-center pb-4 pt-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
          Recomendado para ti
        </h2>
        {/* Acento celeste característico de Veryfazty */}
        <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[#38bdf8]"></div>
      </div>

      <div className="w-full">
        {isMobile ? (
          <MobilePromos promos={PROMOS_DATA} />
        ) : (
          <DesktopPromos promos={PROMOS_DATA} />
        )}
      </div>
    </section>
  );
}
