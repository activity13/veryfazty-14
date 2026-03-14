"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CATEGORIES, PARTNERS_DATA } from "../../../data/partners-data";

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);

  // Categorías para la animación (excluimos "Todos" para que sea más específico)
  const promoCategories = CATEGORIES.filter(cat => cat !== "Todos");

  useEffect(() => {
    if (!hasInteracted) {
      const interval = setInterval(() => {
        setPromoIndex((prev) => (prev + 1) % promoCategories.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hasInteracted, promoCategories.length]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setHasInteracted(true);
  };

  const filteredPartners = activeCategory === "Todos"
    ? PARTNERS_DATA
    : PARTNERS_DATA.filter((partner) =>
        partner.categories.includes(activeCategory)
      );

  return (
    <div className="container-screen min-h-screen py-10 overflow-hidden">
      <header className="text-center mb-12">
        <h2 className="text-6xl font-bold tracking-tighter">DELIVERY</h2>
        {!hasInteracted && (
          <p className="mt-4 text-gray-700 animate-pulse">¿Qué te apetece hoy? Toca para descubrir</p>
        )}
      </header>

      {/* Sección de Categorías con Animación de "Tentación" */}
      <div className="relative min-h-[120px] mb-12 flex flex-col items-center justify-center">
        {!hasInteracted ? (
          <button
            onClick={() => setHasInteracted(true)}
            className="group relative cursor-pointer flex flex-col items-center"
          >
            <div className="overflow-hidden h-20 flex items-center justify-center">
              <span 
                key={promoIndex}
                className="text-5xl md:text-7xl mx-4 font-black text-bluefazty uppercase italic animate-bounceIn"
              >
                {promoCategories[promoIndex]}
              </span>
            </div>
            <div className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm font-bold tracking-widest hover:scale-110 transition-transform duration-300 shadow-xl">
              VER TODAS LAS CATEGORÍAS
            </div>
            
            {/* Círculos decorativos animados de fondo */}
            <div className="absolute -z-10 w-32 h-32 bg-bluefazty/10 rounded-full blur-2xl animate-ping opacity-50"></div>
          </button>
        ) : (
          <div className="flex flex-wrap justify-center gap-2 animate-fadeInDown">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300 transform active:scale-95 ${
                  activeCategory === category
                    ? "bg-bluefazty text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-bluefazty/10 hover:text-bluefazty"
                }`}
              >
                {category}
              </button>
            ))}
            <button 
              onClick={() => {
                setHasInteracted(false);
                setActiveCategory("Todos");
              }}
              className="ml-2 text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              Cerrar filtros ✕
            </button>
          </div>
        )}
      </div>

      {/* Grid de Restaurantes */}
      <div className={`grid place-content-between justify-center gap-8 text-center transition-all duration-700 ${
        filteredPartners.length === 1 
          ? "grid-cols-1" 
          : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3"
      }`}>
        {filteredPartners.map((partner) => (
          <div key={partner.id} className="group flex justify-center align-middle transition-all duration-500 animate-fadeIn">
            {partner.active ? (
              <Link
                href={partner.href}
                className="flex flex-col items-center border-none bg-inherit bg-none align-middle transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-sm group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    className="cursor-pointer transition-transform duration-500 group-hover:rotate-2"
                    src={partner.image}
                    width={150}
                    height={150}
                    alt={partner.alt}
                  />
                </div>
                <span className="mt-3 text-xs font-bold text-gray-400 group-hover:text-bluefazty transition-colors uppercase tracking-widest opacity-0 group-hover:opacity-100 duration-300">
                  {partner.name}
                </span>
              </Link>
            ) : (
              <div className="relative flex flex-col items-center border-none bg-inherit bg-none align-middle opacity-60 cursor-not-allowed grayscale transition-all duration-500 hover:grayscale-0">
                <Image
                  className="rounded-2xl"
                  src={partner.image}
                  width={150}
                  height={150}
                  alt={partner.alt}
                />
                {partner.soon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl">
                    <span className="text-white font-bold text-[10px] bg-black/80 px-2 py-1 rounded-md border border-white/20">
                      PRÓXIMAMENTE
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {filteredPartners.length === 0 && (
        <div className="text-center mt-16 text-gray-400 italic flex flex-col items-center animate-pulse">
          <div className="text-4xl mb-2">🍽️</div>
          Aún no tenemos socios en esta categoría, ¡vuelve pronto!
        </div>
      )}
    </div>
  );
};

export default Partners;
