import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
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
    url: "https://veryfazty.com/la-k", // Asegúrate que esta URL sea la correcta
    siteName: "La K Delivery",
    images: [
      {
        url: "/images/la-k_seo.png", // Usamos una de las imágenes que ya tienes en options
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
export default function LaK() {
  const resto_config = {
    name: "La K Vichayito",
    logo: "la_k_logo.png",
    color: "#0070f3",
    horarios: {
      publicado: "ABIERTO TODOS LOS DIAS",
      horario_general: {
        apertura: "14:00",
        cierre: "21:45",
      },
      horario_parcial: {
        carta: "Pizzas",
        apertura: "19:00",
        cierre: "21:45",
      },
    },
    condiciones: {
      postres:
        "La disponibilidad de los postres puede variar según el stock disponible.",
      envases:
        "Por cada plato pedido, se cobrará un envase de S/1 y por las pizzas S/2.",
    },
    servicios_adicionales: {
      caja_de_pizza: {
        value: true,
        mensaje: "+ S/2",
      },
      eco_friendly: {
        value: false,
        mensaje: null,
      },
      envase_eco: {
        value: true,
        mensaje: "+ S/1",
      },
    },
  };

  const options = {
    Carta: "la-k-karta.jpg",
    Pizzas: "la-k-pizzas.jpg",
  };
  const alt = "la k vichayito delivery las pocitas";
  const description =
    "carta de la k contiene opciones marinas, piqueos, postres y mucho más";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
