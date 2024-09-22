import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
export const metadata = {
  title:
    "Antica Pizzería Vichayito - Delivery en Vichayito y Las Pocitas: Pizzas, Pastas, Postres y Más",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Las Cabañas de Antica y Antica Pizzería: Pizzas artesanales, hamburguesas gourmet, postres caseros, lasagnas y más. Haz tu pedido ahora.",
};
export default function BrosFood() {
  const resto_config = {
    name: "cabanasDeAntica",
    logo: "cabanas-antica.png",
    color: "cyan",
    horarios: {
      publicado: "ABIERTO TODOS LOS DIAS",
      horario_general: {
        apertura: "12:00",
        cierre: "23:00",
      },
      horario_parcial: {
        carta: "dia",
        apertura: "12:00",
        cierre: "17:00",
      },
    },
    servicios_adicionales: {
      caja_de_pizza: {
        value: true,
        mensaje: "Envases biodegradables incluidos",
      },
      eco_friendly: {
        value: true,
        mensaje: "Envases biodegradables incluidos",
      },
      envase_eco: {
        value: true,
        mensaje: "Envases biodegradables incluidos",
      },
    },
  };

  const options = {
    DIA: "antica-dia.jpg",
    NOCHE: "antica-noche.jpg",
  };
  const alt = "Bros Food Vichayito - Delivery en Vichayito y Las Pocitas";
  const description =
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Bros Food";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
