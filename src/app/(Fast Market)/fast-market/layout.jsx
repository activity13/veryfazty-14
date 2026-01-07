import React from "react";
import BackArrow from "../../ui/back_arrow";
export const metadata = {
  title: "Fast Market: Market virtual y delivery en Vichayito",
  description:
    "Fast Market es tu market virtual para comprar online con delivery en Vichayito, Las Pocitas, Los Órganos y Máncora. Catálogo digital, precios claros y pedidos rápidos.",

  metadataBase: new URL("https://veryfazty.com"),
  alternates: {
    canonical: "/fast-market",
  },
  applicationName: "Fast Market",
  category: "shopping",
  creator: "Veryfazty",
  publisher: "Veryfazty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Fast Market: Market virtual y delivery en Vichayito",
    description:
      "Compra online en Fast Market: market virtual con delivery en Vichayito, Las Pocitas, Los Órganos y Máncora.",
    url: "/fast-market",
    siteName: "Fast Market",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/2024_carta_sin_logo.jpg",
        alt: "Fast Market - market virtual con delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Market: market virtual con delivery",
    description:
      "Compra online con delivery en Vichayito, Las Pocitas, Los Órganos y Máncora.",
    images: ["/images/2024_carta_sin_logo.jpg"],
  },
  keywords: [
    "Fast Market",
    "market virtual",
    "market online",
    "comprar online",
    "delivery",
    "delivery Vichayito",
    "delivery Las Pocitas",
    "delivery Los Órganos",
    "delivery Máncora",
    "catálogo digital",
    "tienda online",
    "Veryfazty",
  ],
};

export default function ElMarketLayout({ children }) {
  // This layout intentionally overlays the app so the global header/footer
  // of the main site are visually hidden when this route is active.
  // Using a fixed full-viewport wrapper with high z-index keeps the embed
  // isolated without modifying the root layout.
  return (
    <div className="scrollbar-none fixed inset-0 z-[9999] min-h-screen w-full overflow-auto bg-white">
      <div className="mx-auto max-w-7xl ">{children}</div>
      <BackArrow />
    </div>
  );
}
