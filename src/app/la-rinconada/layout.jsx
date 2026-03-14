import React from "react";
import Link from "next/link";

export const metadata = {
  title: "La Rinconada: Las Mejores Carnes y Parrilladas en Vichayito y Máncora",
  description:
    "Pide los mejores cortes de carne: Angus, Wagyu y Cerdo Duroc. Todo lo que necesitas para tu parrillada con delivery en Vichayito, Máncora y Los Órganos.",

  metadataBase: new URL("https://veryfazty.com"),
  alternates: {
    canonical: "/la-rinconada",
  },
  applicationName: "La Rinconada",
  category: "restaurant",
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
    title: "La Rinconada: Carnes Premium para tu Parrilla en Vichayito",
    description:
      "Llevamos la mejor carne a tu casa para que disfrutes con amigos. Delivery de cortes premium y todo para tu parrilla en Vichayito, Máncora y Los Órganos.",
    url: "/la-rinconada",
    siteName: "La Rinconada",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/larinconada_restaurant.jpeg",
        alt: "La Rinconada - Carnes Premium y Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Rinconada: Carnes Premium y Delivery",
    description:
      "Cortes Angus, Wagyu y Cerdo Duroc para tus previas y parrilladas. ¡Pide por delivery!",
    images: ["/images/larinconada_restaurant.jpeg"],
  },
  keywords: [
    "La Rinconada",
    "carnes premium",
    "delivery carnes",
    "Angus",
    "Wagyu",
    "Kobe",
    "Cerdo Duroc",
    "langostinos",
    "carbón para parrilla",
    "delivery Vichayito",
    "parrilladas",
    "parrilla con amigos",
    "delivery Las Pocitas",
    "delivery Los Órganos",
  ],
};

export default function LaRinconadaLayout({ children }) {
  // This layout intentionally overlays the app so the global header/footer
  // of the main site are visually hidden when this route is active.
  // Using a fixed full-viewport wrapper with high z-index keeps the embed
  // isolated without modifying the root layout.
  return (
    <div className="fixed inset-0 z-[9999] h-[100dvh] w-full scrollbar-none bg-white">
      <div className="mx-auto h-full max-w-7xl">{children}</div>
      {/* Botón flotante dedicado: Volver a Veryfazty */}
      <div className="pointer-events-none absolute bottom-20 right-0 z-0 flex justify-end">
        <Link
          href="/"
          className="pointer-events-auto flex items-center justify-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-3 text-lg font-bold text-blue-500 shadow-md transition-all hover:bg-blue-50 active:scale-95"
          scroll={false}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Inicio
        </Link>
      </div>

      {/* SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Restaurant", "LocalBusiness"],
            name: "La Rinconada",
            description: "Venta de carnes premium y cortes importados para parrilladas. Delivery en Vichayito, Máncora y alrededores.",
            url: "https://veryfazty.com/la-rinconada",
            telephone: "+51924380097",
            image: "https://veryfazty.com/images/larinconada_restaurant.jpeg",
            logo: "https://veryfazty.com/images/larinconada.jpeg",
            servesCuisine: ["Carnes Premium", "Parrilla"],
            address: {
              "@type": "PostalAddress",
              addressRegion: "Piura",
              addressLocality: "Los Órganos",
              addressCountry: "PE"
            },
            areaServed: [
              {
                "@type": "City",
                name: "Vichayito"
              },
              {
                "@type": "City",
                name: "Las Pocitas"
              },
              {
                "@type": "City",
                name: "Máncora"
              },
              {
                "@type": "City",
                name: "Los Órganos"
              }
            ],
            priceRange: "$$"
          }),
        }}
      />
    </div>
  );
}
