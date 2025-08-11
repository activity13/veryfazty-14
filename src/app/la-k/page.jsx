import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
export const metadata = {
  title:
    "La K Vichayito - Delivery en Vichayito y Las Pocitas: Pizzas, Pastas, Postres y Más",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con La K: Pizzas artesanales, pastas frescas, hamburguesas gourmet, postres caseros, y más. Ingredientes frescos como arúgula de nuestro huerto. Haz tu pedido ahora.",
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
