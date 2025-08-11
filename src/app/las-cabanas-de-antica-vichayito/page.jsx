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
    name: "Las Cabañas de Antica Vichayito",
    logo: "cabanas-antica.png",
    color: "#0070f3",
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
    condiciones: {
      postres:
        "La disponibilidad de los postres puede variar según el stock disponible.",
      envases:
        "las Cabañas de Antica incluye los envases biodegradables en el precio de los platos.  ",
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
  const alt =
    "Antica Pizzería Delivery en Vichayito y Las Pocitas de Las Cabañas de Antica Vichayito";
  const description =
    "delivery antica vichayito, delivery antica pizzeria, delivery pizza las pocitas";

  return (
    <div className="min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <RestaurantCard options={options} alt={alt} description={description} />
      <BackArrow />
    </div>
  );
}
