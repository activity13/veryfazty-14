import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
export const metadata = {
  title:
    "Bros Food Vichayito - Delivery en Vichayito y Las Pocitas: Pizzas, Pastas, Postres y Más",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Bros Food: Pizzas artesanales, hamburguesas gourmet, postres caseros, y más. Haz tu pedido ahora.",
};
export default function BrosFood() {
  const resto_config = {
    name: "Bros Food",
    logo: "brosfood.png",
    color: "yellow",
    horarios: {
      publicado: "DE 7 A 11 PM, DESCANSAN LOS MIÉRCOLES",
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
  const alt = "Bros Food Vichayito - Delivery en Vichayito y Las Pocitas";
  const description =
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Bros Food";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
