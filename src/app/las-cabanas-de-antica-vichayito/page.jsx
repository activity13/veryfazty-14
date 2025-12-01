import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
export const metadata = {
  title: "Las Cabañas de Antica | Pizzería & Hotel en Vichayito",
  description:
    "La auténtica experiencia Antica frente al mar. Disfruta de nuestras famosas pizzas a la leña, pastas artesanales y la mejor vista de Vichayito. ¡Reserva o pide delivery!",
  keywords: [
    "Las Cabañas de Antica",
    "Antica Pizzeria Vichayito",
    "Pizzas a la leña Mancora",
    "Restaurante Italiano Vichayito",
    "Pastas artesanales",
    "Hotel frente al mar",
    "Delivery Vichayito",
  ],
  authors: [{ name: "Las Cabañas de Antica" }],
  openGraph: {
    title: "Las Cabañas de Antica | Tradición Italiana en la Playa",
    description:
      "¿Provoca una pizza a la leña? Pide de Antica Vichayito  a tu hotel. Pastas, vinos y más al alcanze de un clic.",
    url: "https://veryfazty.com/las-cabanas-de-antica-vichayito",
    siteName: "Las Cabañas de Antica",
    images: [
      {
        url: "/images/antica_seo.jpg", // Asegúrate de tener esta imagen
        width: 500,
        height: 500,
        alt: "Pizza a la leña frente al mar en Antica",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antica Pizzería Vichayito | Las Cabañas de Antica",
    description: "Pizzas a la leña, pastas y relax frente al mar en Vichayito.",
    images: ["/images/antica_seo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AnticaPizzeria() {
  const resto_config = {
    name: "Las Cabañas de Antica",
    logo: "cabanas-antica.png", // Asegúrate de que este archivo exista en public/images/
    color: "#991b1b", // Rojo terracota característico de Antica
    horarios: {
      publicado: "ABIERTO TODOS LOS DÍAS",
      horario_general: {
        apertura: "12:30",
        cierre: "22:00 hrs.",
      },
      horario_parcial: {
        carta: "Pizzas y Pastas",
        apertura: "12:30",
        cierre: "22:00",
      },
    },
    condiciones: {
      postres: "Preguntar por los postres del día.",
      envases: "Empaques eco-amigables para llevar.",
    },
    servicios_adicionales: {
      eco_friendly: {
        value: true,
        mensaje: "Comprometidos con el mar",
      },
      envase_eco: {
        value: true,
        mensaje: "Empaques eco-amigables para llevar",
      },
      caja_de_pizza: {
        value: true,
        mensaje: "Caja incluida",
      },
    },
  };

  const options = {
    DIA: "antica-dia.jpg",
    NOCHE: "antica-noche.jpg",
  };
  const alt =
    "Las Cabañas de Antica Pizzería Vichayito. Pizzas a la leña, pastas frescas y comida italiana frente al mar.";
  const description =
    "En Las Cabañas de Antica traemos la tradición de la verdadera pizza italiana a las playas del norte. Disfruta de nuestra masa artesanal, horno a leña y una selección exclusiva de pastas y vinos, todo en un ambiente rústico y acogedor frente al mar de Vichayito.";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
