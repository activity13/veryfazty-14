"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageWithLoader({
  src,
  alt,
  width = 800,
  height = 450,
  priority = false,
  quality = 80,
  className = "",
}) {
  const [isLoading, setIsLoading] = useState(true);
  const icon = "/images/envase_eco.svg";
  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <div className="relative w-full">
      {isLoading && (
        <img
          src={icon}
          alt="Cargando..."
          aria-hidden="true"
          className="absolute left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-spin pt-5"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        onLoadingComplete={() => setIsLoading(false)}
        className={`rounded-lg transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
      />
    </div>
  );
}
