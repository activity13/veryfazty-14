import Slider from "../ui/imageSquareSlider";
import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";

export const metadata = {
  title: "Deli Antica | Market Gourmet & Delivery en Vichayito",
  description:
    "Tu market gourmet en la playa. Delivery de quesos finos, embutidos, vinos, pastas artesanales y pizzas congeladas en Vichayito y Las Pocitas.",
  keywords: [
    "Deli Antica Vichayito",
    "Market Gourmet Mancora",
    "Vinos y Quesos Delivery",
    "Embutidos Premium",
    "Pizzas Congeladas Vichayito",
    "Pastas Artesanales",
    "Delivery Las Pocitas",
  ],
  authors: [{ name: "Deli Antica" }],
  openGraph: {
    title: "Deli Antica | Lo mejor del Gourmet en tu casa",
    description:
      "¿Una noche de vinos y quesos? Deli Antica te lleva lo mejor: Embutidos, Pastas, Pizzas listas para hornear y productos gourmet a tu puerta.",
    url: "https://veryfazty.com/deli-antica",
    siteName: "Deli Antica Market",
    images: [
      {
        url: "/images/deliAntica.png", // Usamos una de las imágenes de tu slider como referencia
        width: 1200,
        height: 630,
        alt: "Deli Antica Market Gourmet en Vichayito",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deli Antica | Delivery Gourmet Vichayito",
    description:
      "Vinos, Quesos, Pastas y Pizzas congeladas. Delivery en Vichayito y Las Pocitas.",
    images: ["/images/deliAntica.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeliAntica() {
  const imageNames = [
    "deli-antica-congelados.png",
    "deli-antica-quesos.png",
    "deli-antica-embutidos.png",
    "deli-antica-pastas.png",
    "deli-antica-pate.png",
    "deli-antica-bottega.png",
  ];

  const resto_config = {
    name: "Deli Antica Vichayito",
    logo: "deliAntica.png",
    color: "#8d3d21",
    horarios: {
      publicado: "ABIERTO TODOS LOS DIAS",
      horario_general: {
        apertura: "12:00",
        cierre: "23:00",
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
      envases: "Deli Antica no cobra por envases.",
    },
    servicios_adicionales: {
      caja_de_pizza: {
        value: true,
        mensaje: "INCLUIDO",
      },
      eco_friendly: {
        value: true,
        mensaje: "INCLUIDO",
      },
      envase_eco: {
        value: true,
        mensaje: "INCLUIDO",
      },
    },
  };

  // Textos mejorados para accesibilidad y SEO interno
  const alt =
    "Deli Antica Vichayito Market Gourmet. Vinos, Quesos, Embutidos y Pastas.";
  const description =
    "Deli Antica trae la experiencia gourmet a tu casa de playa. Encuentra una selección exclusiva de embutidos, quesos importados, vinos, pastas frescas y nuestras prácticas pizzas congeladas listas para hornear.";

  return (
    <div className="max-w-screen min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <div className="flex justify-center">
        <div className="max-w-md justify-center">
          <Slider imageNames={imageNames} />
        </div>
      </div>
      <BackArrow />
    </div>
  );
}
