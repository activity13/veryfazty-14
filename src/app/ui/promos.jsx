import Image from "next/image";
import tableStand from "../../../public/images/table_small.png";
import Slider from "./linkeableSlider";

export default function Promos() {
  const imageNames = ["promo-bros.png", "promo-bros-2.png"];
  const goLink = "https://wa.me/519";

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="max-w-sm">
        <Slider imageNames={imageNames} goLink={goLink} />
        <Image
          src={tableStand}
          height={116}
          width={416}
          alt="veryfazty table presents offers"
          className=" -z-50 -mt-24 select-none" // Ajuste de margen para posicionar la imagen correctamente
        />
      </div>
    </div>

    // <div className="mh container mx-auto flex justify-center pb-4 align-middle">
    //   <div className="min-w-md relative bottom-0 z-[-1]">
    //     <section className="max-w-sm">
    //
    //     </section>
    //     <Image
    //       src={tableStand}
    //       height={90}
    //       width={500}
    //       alt="veryfazty table presents offers"
    //       className=""
    //     />
    //   </div>
    //   <div />
    // </div>
  );
}
