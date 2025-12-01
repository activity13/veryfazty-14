import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
import Image from "next/image";
export const metadata = {
  title:
    "Vivak Vichayito - Delivery en Vichayito y Las Pocitas: Pizzas, Pastas, Postres y Más",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con vivak Vichayito, La terracita fast food. Ofrecemos una variedad de deliciosos sandwiches, hamburguesas, pollo a la brasa, borster y más. Haz tu pedido ahora y disfruta de una experiencia gastronómica única en la playa.",
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
