import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
import { Suspense } from "react";
export const metadata = {
  title:
    "La K Vichayito - Delivery en Vichayito y Las Pocitas: Pizzas, Pastas, Postres y Más",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con La K: Pizzas artesanales, pastas frescas, hamburguesas gourmet, postres caseros, y más. Ingredientes frescos como arúgula de nuestro huerto. Haz tu pedido ahora.",
};
export default function PlayaPlameras() {
  const resto_config = {
    name: "hotel-playa-plameras-vichayito",
    logo: "playa-palmeras.png",
    color: "yellow",
    horarios: {
      publicado: "ABIERTO TODOS LOS DIAS",
      horario_general: {
        apertura: "14:00",
        cierre: "21:00 hrs.",
      },
      horario_parcial: {
        carta: "no disponible",
        apertura: "-",
        cierre: "-",
      },
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
  const alt =
    "Hotel Playa palmeras Vichayito delivery las pocitas. Noche de chifa, pescados, mariscos y más en Vichayito y Las Pocitas, delivery veryfazty";
  const description =
    "El Hotel Playa Palmeras ofrece una deliciosa carta de chifa, pescados, mariscos y más. Disfruta de una experiencia gastronómica única en Vichayito y Las Pocitas con nuestro servicio de delivery veryfazty.";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
