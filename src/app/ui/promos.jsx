import Image from "next/image";
import tableStand from "../../../public/images/table_small.png";
import Slider from "../ui/promoSlider";

export default function Promos() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="max-w-sm">
        <Slider />
        <Image
          src={tableStand}
          height={116}
          width={416}
          alt="veryfazty table presents offers"
          className=" -z-50 -mt-24" // Ajuste de margen para posicionar la imagen correctamente
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