import React from "react";
import BackArrow from "../ui/back_arrow";

export const metadata = {
  title: "La K Vichayito | Delivery de Pizzas y Pastas en Las Pocitas",
  description:
    "¿Buscas delivery en Vichayito o Las Pocitas? La K te ofrece pizzas artesanales, pastas frescas y postres caseros. ¡Pide online ahora!",
  keywords: [
    "La K Vichayito",
    "Sandwiches Vichayito",
    "Hamburguesas Vichayito",
    "Pollo al cilantro Vichayito",
    "Delivery Vichayito",
    "Delivery Las Pocitas",
    "Pizzas Vichayito",
    "Restaurante Italiano Vichayito",
    "Pastas frescas",
    "Comida a domicilio playa",
    "Postres caseros Vichayito",
    "La K Delivery",
    "Comida italiana Vichayito",
    "Pizzas artesanales Mancora",
    "Delivery rápido playa",
    "La K pizzas y pastas",
  ],
  authors: [{ name: "La K Vichayito" }],
  openGraph: {
    title: "La K Vichayito | Tu delivery favorito en la playa",
    description:
      "Pizzas artesanales, pastas y postres con los mejores ingredientes. Delivery rápido a Vichayito y Las Pocitas.",
    url: "https://veryfazty.com/la-k",
    siteName: "La K Delivery",
    images: [
      {
        url: "/images/la-k_seo.png",
        width: 250,
        height: 250,
        alt: "Pizza artesanal de La K Vichayito",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La K Vichayito | Delivery Express",
    description: "Pizzas y Pastas en Vichayito y Las Pocitas. ¡Pide ahora!",
    images: ["/images/la-k_seo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LaKLayout({ children }) {
  // This layout intentionally overlays the app so the global header/footer
  // of the main site are visually hidden when this route is active.
  // Using a fixed full-viewport wrapper with high z-index keeps the embed
  // isolated without modifying the root layout.
  return (
    <div className="scrollbar-none fixed inset-0 z-[9999] min-h-screen w-full overflow-auto bg-white">
      <div className="mx-auto max-w-7xl h-full">{children}</div>
      <BackArrow />
    </div>
  );
}
