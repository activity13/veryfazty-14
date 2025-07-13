import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import RestaurantCard from "../ui/menuLoader";
import Image from "next/image";
export const metadata = {
  title:
    "Vivak Vichayito, La terracita Fast food - Delivery en Vichayito y Las Pocitas: Pizzas, Pastas, Postres y Más",
  description:
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con vivak Vichayito, La terracita fast food. Ofrecemos una variedad de deliciosos sandwiches, hamburguesas, pollo a la brasa, borster y más. Haz tu pedido ahora y disfruta de una experiencia gastronómica única en la playa.",
};
export default function Vivak() {
  const resto_config = {
    name: "Vivak Vichayito, la terracita fast food",
    logo: "vivak2.svg",
    color: "white",
    horarios: {
      publicado: "DE 1 A 11 PM, DESCANSAN LOS LUNES",
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

  const carta = {
    carta_route: "vivak-carta.png",
    fondo_route: "vivak-fondo.png",
  };
  const alt =
    "Sandwiches, hamburguesas, pollo a la brasa, borster y más en Vivak Vichayito, servicio de delivery en Vichayito y Las Pocitas";
  const description =
    "Disfruta del mejor delivery en Vichayito y Las Pocitas con Vivak Vichayito, La terracita fast food. Ofrecemos una variedad de deliciosos sandwiches, hamburguesas, pollo a la brasa, borster y más. Haz tu pedido ahora y disfruta de una experiencia gastronómica única en la playa.";

  return (
    <div>
      <Cartelera config={resto_config} alt={alt} description={description} />
      <div
        className="relative h-screen w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/${carta.fondo_route}')` }}
      >
        {/* Contenedor controlado para la imagen */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pt-28 lg:pt-48">
          <div className="h-[80%] w-[80%] max-w-xl overflow-y-auto rounded-xl pt-5 md:w-[50%] md:pt-0">
            <img
              src={`/images/${carta.carta_route}`}
              alt="Scrollable Extra Tall Image"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <BackArrow />
    </div>
  );
}
