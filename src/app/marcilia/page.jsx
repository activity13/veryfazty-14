import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
export const metadata = {
  title:
    "Marcilia Vichayito - Delivery en Vichayito y Las Pocitas: Menu, Carta marina, Postres, Sandwich y mucho más.",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Marcilia: Pizzas artesanales, menu completo, postres caseros, sadwiches. Haz tu pedido ahora.",
};
export default function BrosFood() {
  const resto_config = {
    name: "Marcilia",
    logo: "Marcilia.png",
    color: "cyan",
    horarios: {
      publicado: "DESCANSAN LOS LUNES",
      horario_general: {
        apertura: "14:00",
        cierre: "16:45",
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
        mensaje: "+ S/1.5",
      },
      eco_friendly: {
        value: false,
        mensaje: null,
      },
      envase_eco: {
        value: true,
        mensaje: "+ S/1.5",
      },
    },
  };

  const options = {
    Carta: "marcilia-carta-actual.jpg",
    Menu: "marcilia-vichayito-carta-2024.png",
  };
  const alt = "Marcilia Vichayito - Delivery en Vichayito y Las Pocitas";
  const description =
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Marcilia";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
