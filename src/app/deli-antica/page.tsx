import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deli Antica ",
  description:
    "delivery de deliecatesen, embutidos, quesos finos, vinos, productos gourmet, pizzas congeladas, pastas, lasañas, lasagnas, en Vichayito y Las Pocitas veryfazty",
};
export default function DeliAntica() {
  return (
    <div className="p-5">
      <div className="container mb-3 box-border border border-red-600 p-5">
        <p>Información y navegación de cartas</p>
      </div>
      <div className="container h-screen border border-blue-700"></div>
    </div>
  );
}
