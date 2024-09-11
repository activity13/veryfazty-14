import Image from "next/image";
import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
import karta from "../../../public/images/la-k-karta.png";
import RestaurantCard from "../ui/menuLoader";
import pizzas from "../../../public/images/la-k-pizzas.png";

export default function LaK() {
  const alt = "la k vichayito delivery las pocitas";
  const description =
    "carta de la k contiene opciones marinas, piqueos, postres y mucho más";
  const cartas = [karta, pizzas];

  return (
    <div className="min-h-screen">
      <Cartelera />
      <RestaurantCard name={karta} alt={alt} description={description} />

      <BackArrow />
    </div>
  );
}
