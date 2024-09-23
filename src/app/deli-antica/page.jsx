import Slider from "../ui/imageSlider";
import Cartelera from "../ui/cartelera";
import BackArrow from "../ui/back_arrow";
export const metadata = {
  title: "Deli Antica | Veryfazty Delivery",
  description:
    "Veryfazty ofrece un exclusivo delivery de delicatessen: embutidos, quesos finos, vinos, productos gourmet, pizzas congeladas, pastas y lasañas en Vichayito y Las Pocitas.",
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

  const resto_config = {
    name: "Deli Antica Vichayito",
    logo: "deliAntica.png",
    color: "brown",
    horarios: {
      publicado: "ABIERTO TODOS LOS DIAS",
      horario_general: {
        apertura: "12:00",
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
        value: true,
        mensaje: "INCLUIDO",
      },
      eco_friendly: {
        value: true,
        mensaje: "INCLUIDO",
      },
      envase_eco: {
        value: true,
        mensaje: "INCLUIDO",
      },
    },
  };
  return (
    <div className="max-w-screen min-h-screen">
      <Cartelera config={resto_config} alt={alt} description={description} />
      <div className="flex justify-center">
        <div className="max-w-md justify-center">
          <Slider imageNames={imageNames} />
        </div>
      </div>
      <BackArrow />
    </div>
  );
}
