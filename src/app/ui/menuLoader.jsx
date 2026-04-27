"use client";

import Image from "next/image";
import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ImageWithLoader from "./ImageWithLoader";

function RestaurantCardContent({ options, alt, description, disclaimer }) {
  // Determinamos si las opciones tienen un nivel extra de anidación
  const isNested = useMemo(() => {
    if (!options || Object.keys(options).length === 0) return false;
    return typeof Object.values(options)[0] === "object";
  }, [options]);

  const mainMenus = useMemo(
    () => (isNested ? Object.keys(options) : []),
    [isNested, options],
  );

  const searchParams = useSearchParams();
  const queryCarta = searchParams.get("carta");

  // Estado para el menú principal (Almuerzo, Cena, etc)
  const [activeMenu, setActiveMenu] = useState(() => {
    if (!isNested) return null;
    if (queryCarta && mainMenus.includes(queryCarta)) return queryCarta;
    return mainMenus[0];
  });

  // Si el parametro URL cambia por navegación, actualizamos
  useEffect(() => {
    if (isNested && queryCarta && mainMenus.includes(queryCarta)) {
      setActiveMenu(queryCarta);
    }
  }, [queryCarta, isNested, mainMenus]);

  // Estado para la subcategoría seleccionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Opciones actuales basadas en el menú principal activo
  const currentOptions = useMemo(() => {
    return isNested ? options[activeMenu] : options;
  }, [isNested, activeMenu, options]);

  const displayOptions = currentOptions ? Object.keys(currentOptions) : [];
  const listOptions = currentOptions ? Object.values(currentOptions) : [];

  const isFewOptions = displayOptions.length <= 3;

  // Inicializar o reiniciar la subcategoría cuando cambia el menú activo
  useEffect(() => {
    if (currentOptions && Object.values(currentOptions).length > 0) {
      setSelectedOption(Object.values(currentOptions)[0]);
    }
  }, [activeMenu, currentOptions]);

  return (
    <div className="w-full">
      {/* Selector superior para menús anidados (ej. Almuerzo, Cena, Chifa) */}
      {isNested && (
        <div className="mb-4 mt-2 flex justify-center px-2">
          <div className="flex gap-2 rounded-full bg-gray-100 p-1">
            {mainMenus.map((menuName) => {
              const isActive = activeMenu === menuName;
              return (
                <button
                  key={menuName}
                  onClick={() => setActiveMenu(menuName)}
                  className={`rounded-full px-6 py-1.5 text-lg font-semibold transition-all duration-300 md:text-base ${
                    isActive
                      ? "bg-bluefazty text-white shadow-md"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {menuName}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selector de subcategorías */}
      <div
        className={`scrollbar-none flex overflow-x-auto whitespace-nowrap px-2 py-2 md:justify-center ${isFewOptions ? "justify-center" : "justify-start"}`}
      >
        <div className="flex gap-3">
          {displayOptions.map((name, index) => {
            const val = listOptions[index];
            const isSelected = selectedOption === val;
            return (
              <button
                key={index}
                onClick={() => setSelectedOption(val)}
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

      {/* Disclaimer Opcional */}
      {disclaimer && (
        <div className="mt-2 flex justify-center px-4">
          <p className="max-w-md text-center text-2xl font-bold italic text-gray-500">
            {disclaimer}
          </p>
        </div>
      )}

      {/* Contenedor de la Imagen */}
      <div className="flex justify-center">
        <div className="m-3 max-w-[335px] sm:max-w-xl">
          {selectedOption && (
            <ImageWithLoader src={`/images/${selectedOption}`} alt={alt} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function RestaurantCard(props) {
  return (
    <Suspense
      fallback={
        <div className="py-4 text-center text-gray-500">Cargando menú...</div>
      }
    >
      <RestaurantCardContent {...props} />
    </Suspense>
  );
}
