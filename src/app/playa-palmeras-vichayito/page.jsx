import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";

export const metadata = {
  title: "Playa Palmeras | Delivery de Comida Marina y Nikkei en Vichayito",
  description:
    "¿Antojo de mariscos? Playa Palmeras te lleva lo mejor del mar a tu casa en Vichayito y Las Pocitas. Ceviches, Causa Nikkei y platos gourmet. ¡Viernes exclusivos de Chifa!",
  keywords: [
    "Playa Palmeras Delivery",
    "Comida Marina Vichayito",
    "Delivery Las Pocitas",
    "Causa Nikkei",
    "Ceviche a domicilio",
    "Chifa Vichayito",
    "Pescados y Mariscos Vichayito",
  ],
  authors: [{ name: "Playa Palmeras" }],
  openGraph: {
    title: "Playa Palmeras | Lo mejor del mar en tu mesa",
    description:
      "Delivery de pescados, mariscos y fusión Nikkei en Vichayito. Disfruta de nuestra famosa Causa Nikkei y Tiraditos. ¡Viernes Noche de Chifa!",
    url: "https://veryfazty.com/playa-palmeras-vichayito",
    siteName: "Playa Palmeras Delivery",
    images: [
      {
        url: "/images/playa_palmeras_Seo.jpeg", // Usamos una imagen atractiva de comida
        width: 828,
        height: 828,
        alt: "Ceviches y Causa Nikkei Playa Palmeras",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playa Palmeras | Delivery Marino & Nikkei",
    description:
      "Ceviches, Causa Nikkei y Especiales marinos en Vichayito. Viernes: Noche de Chifa.",
    images: ["/images/playa_palmeras_Seo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlayaPlameras() {
  const resto_config = {
    name: "Playa Palmeras Delivery", // Ajustado para enfocar en delivery
    logo: "playa-palmeras.png",
    color: "#4a9a56",
    horarios: {
      publicado: "ABIERTO TODOS LOS DIAS",
      horario_general: {
        apertura: "14:00",
        cierre: "21:00 hrs.",
      },
      horario_parcial: {
        carta: "Viernes de Chifa", // Destacado en el horario
        apertura: "19:00",
        cierre: "22:00",
      },
    },
    condiciones: {
      postres:
        "La disponibilidad de los postres puede variar según el stock disponible.",
      envases: "Por cada plato pedido, se cobrará un envase de S/2",
    },
    servicios_adicionales: {
      eco_friendly: {
        value: true,
        mensaje: null,
      },
      envase_eco: {
        value: true,
        mensaje: "+ S/1",
      },
    },
  };

  const options = {
    Carta: "playa-palmeras-carta.jpg",
    Entradas: "entradas-playa-palmeras.jpg",
    CevichesTiraditos: "ceviches-tiraditos-playa-palmeras.jpg",
    Fondos: "fondos-playa-palmeras.jpg",
    Especiales: "especiales-playa-palmeras.jpg",
    Sopas: "sopas-playa-palmeras.jpg",
    Ensaladas: "ensaladas-playa-palmeras.jpg",
    Postres: "postres-playa-palmeras.jpg",
    Bebidas: "bebidas-playa-palmeras.jpg",
  };

  // Textos actualizados para reflejar el enfoque en comida marina y delivery
  const alt =
    "Playa Palmeras Delivery Vichayito. Especialidad en Causa Nikkei, Ceviches, Tiraditos y comida marina fresca. Viernes noche de Chifa.";
  const description =
    "Playa Palmeras lleva la experiencia gourmet a tu puerta. Especialistas en cocina marina y fusión: desde una Causa Nikkei hasta pescados frescos del día. Nota: Nuestra carta de Chifa está disponible exclusivamente los viernes por la noche.";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
