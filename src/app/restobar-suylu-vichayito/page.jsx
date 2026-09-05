import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
import RestaurantViewTracker from "../ui/RestaurantViewTracker";
export const metadata = {
  title: "Suylu Vichayito | Delivery & Restobar en Vichayito y Las Pocitas",
  description:
    "El mejor delivery en Vichayito y Las Pocitas. Disfruta de pizzas artesanales, hamburguesas gourmet, pollos a la brasa y pastas frente al mar. ¡Pide online en Suylu!",
  keywords: [
    "Suylu Vichayito",
    "Delivery Vichayito",
    "Delivery Las Pocitas",
    "Restaurante Vichayito",
    "Alitas Vichayito",
    "Menu Vichayito",
    "Menu Las Pocitas",
    "Chaufa Vichayito",
    "Pollo a la brasa",
    "Comida rapida playa",
  ],
  authors: [{ name: "Suylu Restobar" }],
  creator: "Viw App",
  publisher: "Viw App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Suylu Vichayito | Tu comida favorita en la playa",
    description:
      "¿Hambre en Vichayito o Las Pocitas? Pedir es fácil. Pizzas, Pastas y Fast Food con delivery rápido. ¡Mira nuestra carta aquí!",
    url: "https://veryfazty.com/restobar-suylu-vichayito", // Asegúrate de poner tu dominio real
    siteName: "Suylu Vichayito Delivery",
    images: [
      {
        url: "/images/wings.jpg", // Usamos la imagen de la carta o una foto de comida atractiva
        width: 250,
        height: 250,
        alt: "Carta y platos de Suylu Vichayito",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suylu Vichayito | Delivery Express",
    description:
      "Pizzas, Hamburguesas y más en Vichayito y Las Pocitas. ¡Pide ahora!",
    images: ["/images/wings.jpg"], // La misma imagen optimizada
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
    canonical: "https://veryfazty.com/restobar-suylu-vichayito",
  },
};
export default function Suylu() {
  const resto_config = {
    name: "Restobar Suylu Vichayito",
    logo: "suylu.svg",
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
    // Menú: "suylu_menu.jpg",
    "PARRILLAS, POLLO A LA BRASA Y BEBIDAS": "suylu_carta1.jpg",
    CARTA: "suylu_carta2.jpg",
  };
  const alt =
    "Carta de Restobar Suylu mostrando variedad de platos como alitas, carnes, pizzas y especiales con precios en soles.";
  const description =
    "🍕 Suylu Vichayito - El mejor delivery en Vichayito y Las Pocitas ⭐ Disfruta alitas BBQ, pizzas artesanales, carnes a la parrilla, pollo a la brasa jugoso, hamburguesas gourmet y postres caseros. Delivery rápido 1-10 PM todos los días. ¡Ordena ahora y vive la mejor experiencia gastronómica frente al mar! 🌊 Calidad premium, precios justos, sabor único en la costa norte del Perú.";

  return (
    <div className="min-h-screen">
      <RestaurantViewTracker
        restaurantSlug="restobar-suylu-vichayito"
        restaurantName="Restobar Suylu"
        category="Parrillas & Pollo a la Brasa"
      />
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
