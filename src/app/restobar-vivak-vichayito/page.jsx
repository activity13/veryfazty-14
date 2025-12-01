import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
import Image from "next/image";
export const metadata = {
  title: "Vivak Vichayito | Delivery & Restobar en Vichayito y Las Pocitas",
  description:
    "El mejor delivery en Vichayito y Las Pocitas. Disfruta de pizzas artesanales, hamburguesas gourmet, pollos a la brasa y pastas frente al mar. ¡Pide online en Vivak!",
  keywords: [
    "Vivak Vichayito",
    "Delivery Vichayito",
    "Delivery Las Pocitas",
    "Restaurante Vichayito",
    "Pizzas Vichayito",
    "Hamburguesas Mancora",
    "Pollo a la brasa",
    "Comida rapida playa",
  ],
  authors: [{ name: "Vivak Restobar" }],
  creator: "Viw App",
  publisher: "Viw App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vivak Vichayito | Tu comida favorita en la playa",
    description:
      "¿Hambre en Vichayito o Las Pocitas? Pedir es fácil. Pizzas, Pastas y Fast Food con delivery rápido. ¡Mira nuestra carta aquí!",
    url: "https://veryfazty.com/vivak-vichayito", // Asegúrate de poner tu dominio real
    siteName: "Vivak Vichayito Delivery",
    images: [
      {
        url: "/images/carta_vivak.jpg", // Usamos la imagen de la carta o una foto de comida atractiva
        width: 1200,
        height: 630,
        alt: "Carta y platos de Vivak Vichayito",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivak Vichayito | Delivery Express",
    description:
      "Pizzas, Hamburguesas y más en Vichayito y Las Pocitas. ¡Pide ahora!",
    images: ["/images/carta_vivak.jpg"], // La misma imagen optimizada
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://veryfazty.com/vivak-vichayito",
  },
};
export default function Vivak() {
  const resto_config = {
    name: "Restobar Vivak Vichayito",
    logo: "vivak_logo.svg",
    color: "white",
    horarios: {
      publicado: "REPARTOS DE 1 A 10 PM, ABIERTO TODOS LOS DÍAS",
      horario_general: {
        apertura: "13:00",
        cierre: "22:00",
      },
      horario_parcial: {
        carta: null,
        apertura: null,
        cierre: null,
      },
    },
    condiciones: {
      postres:
        "La disponibilidad de los postres puede variar según el stock disponible.",
      envases: "Por cada plato pedido, se cobrará un envase de S/2",
    },
    servicios_adicionales: {
      caja_de_pizza: {
        value: false,
        mensaje: "+ S/2",
      },
      eco_friendly: {
        value: false,
        mensaje: null,
      },
      envase_eco: {
        value: false,
        mensaje: "+ S/2",
      },
    },
  };

  const options = {
    Menú: "menu_vivak.jpg",
    Alitas: "alitas_vivak.jpg",
    Carta: "carta_vivak.jpg",
  };
  const alt =
    "Carta del menú de Restobar Vivak mostrando variedad de platos como alitas, carnes, pizzas y especiales con precios en soles.";
  const description =
    "🍕 Vivak Vichayito - El mejor delivery en Vichayito y Las Pocitas ⭐ Disfruta alitas BBQ, pizzas artesanales, carnes a la parrilla, pollo a la brasa jugoso, hamburguesas gourmet y postres caseros. Delivery rápido 1-10 PM todos los días. ¡Ordena ahora y vive la mejor experiencia gastronómica frente al mar! 🌊 Calidad premium, precios justos, sabor único en la costa norte del Perú.";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
