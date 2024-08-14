import { Metadata } from "next";
import Slider from "../ui/imageSlider";
export const metadata: Metadata = {
  title: "Deli Antica ",
  description:
    "delivery de deliecatesen, embutidos, quesos finos, vinos, productos gourmet, pizzas congeladas, pastas, lasañas, lasagnas, en Vichayito y Las Pocitas veryfazty",
};
export default function DeliAntica() {
  const imageNames = [
    "deli-antica-congelados.png",
    "deli-antica-quesos.png",
    "deli-antica-embutidos.png",
    "deli-antica-pastas.png",
    "deli-antica-pate.png",
    "deli-antica-bottega.png",
  ];
  return (
    <div className="flex flex-col">
      <div className="container mb-3 box-border border border-red-600 p-5">
        <p>Información y navegación de cartas</p>
      </div>
      <div className="flex justify-center border border-blue-700">
        <div className="w-full max-w-4xl">
          <Slider imageNames={imageNames} />
        </div>
      </div>
    </div>
  );
}
