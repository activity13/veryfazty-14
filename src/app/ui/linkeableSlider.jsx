"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trackEvent } from "@/src/lib/analytics";

export default function SimpleSlider({ promos, isMobile }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="w-full pb-8">
      <Slider {...settings}>
        {promos.map((promo) => {
          // Seleccionar la imagen dependiendo del dispositivo
          const imageSrc = isMobile ? promo.mobileImage : promo.desktopImage;

          // Definir hacia dónde redirige
          const href =
            promo.type === "whatsapp"
              ? `https://wa.me/${promo.whatsappNumber}?text=${encodeURIComponent(promo.whatsappMessage)}`
              : promo.internalLink;

          const isExternal = promo.type === "whatsapp";

          const ImageComponent = (
            <div className="relative cursor-pointer overflow-hidden rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgb(56,189,248,0.3)]">
              <Image
                src={`/images/${imageSrc}`}
                height={800}
                width={800}
                alt={promo.alt}
                priority
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          );

          return (
            <div
              key={promo.id}
              className="rounded-xl px-1 pb-4 pt-2 outline-none"
            >
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block outline-none"
                  onClick={() => {
                    trackEvent("promo_click", {
                      promo_id: promo.id,
                      promo_type: "whatsapp",
                      restaurant_name: promo.alt,
                    });
                    trackEvent("whatsapp_click", {
                      source: "promo",
                      restaurant_name: promo.alt,
                      phone: promo.whatsappNumber,
                      message: promo.whatsappMessage,
                    });
                  }}
                >
                  {ImageComponent}
                </a>
              ) : (
                <Link
                  href={href}
                  className="block outline-none"
                  onClick={() => {
                    trackEvent("promo_click", {
                      promo_id: promo.id,
                      promo_type: "internal",
                      restaurant_name: promo.alt,
                      internal_link: promo.internalLink,
                    });
                  }}
                >
                  {ImageComponent}
                </Link>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
