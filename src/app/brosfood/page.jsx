import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";

export const metadata = {
  title: "Bros Food | Delivery de Hamburguesas y Pizzas en Vichayito",
  description:
    "¿Hambre por la noche? Bros Food te salva. Las mejores hamburguesas gourmet, pizzas artesanales y postres en Vichayito y Las Pocitas. Delivery de 7pm a 11pm.",
  keywords: [
    "Bros Food Vichayito",
    "Hamburguesas Vichayito",
    "Delivery Vichayito Noche",
    "Pizzas Artesanales",
    "Comida Rápida Las Pocitas",
    "Salchipapas Vichayito",
    "Postres Caseros",
  ],
  authors: [{ name: "Bros Food" }],
  openGraph: {
    title: "Bros Food | Tu antojo nocturno en la playa",
    description:
      "Hamburguesas jugosas, pizzas con masa madre y postres increíbles. Atendemos de 7pm a 11pm en Vichayito y Las Pocitas.",
    url: "https://veryfazty.com/brosfood",
    siteName: "Bros Food Delivery",
    images: [
      {
        url: "/images/brosfood_seo.png", // Asegúrate de subir una foto apetitosa con este nombre
        width: 616,
        height: 621,
        alt: "Hamburguesa Gourmet Bros Food",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bros Food | Delivery Nocturno Vichayito",
    description:
      "Hamburguesas, Pizzas y Postres. Delivery rápido en Vichayito y Las Pocitas.",
    images: ["/images/brosfood_seo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrosFood() {
  const resto_config = {
    name: "Bros Food",
    logo: "brosfood.png",
    color: "#ffcc00", // Amarillo intenso característico de comida rápida/Bros
    horarios: {
      publicado: "DE 7 PM A 11 PM (CERRADO MIÉRCOLES)",
      horario_general: {
        apertura: "19:00",
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
        "La disponibilidad de los postres puede variar según el stock del día.",
      envases: "Costo por empaque: S/2 por plato.",
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
        value: true,
        mensaje: "+ S/2",
      },
    },
  };

  const options = {
    Carta: "2024_carta_sin_logo.jpg",
  };

  const alt =
    "Bros Food Vichayito Delivery. Hamburguesas caseras, pizzas y comida rápida de calidad en Las Pocitas.";
  const description =
    "Bros Food es la opción ideal para tus cenas en la playa. Ofrecemos una propuesta de 'Comfort Food' con hamburguesas de carne seleccionada, pizzas artesanales y postres caseros, todo preparado al momento y llevado a la puerta de tu hospedaje.";

  return (
    <div className="min-h-screen bg-neutral-50">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
