//Utiles
import Link from "next/link";
import Image from "next/image";
//Custom Styles

export default function Page() {
  return (
    <header className="h-[18vh] pt-5  text-center md:h-[25vh]">
      <div className="mb-5 flex flex-row justify-center">
        <h1 className="title text-5xl md:text-7xl">
          <Link href="/">Veryfazty</Link>
        </h1>
        <div>
          <Image
            className="h-auto w-auto md:pt-3"
            src="/images/solo-moto.png"
            alt="Logo de veryfazty, reparto a domicilio en vichayito y pocitas"
            width={45}
            height={55}
          />
        </div>
      </div>
      <h2 className="md:text-3xl">
        Delivery de los mejores restaurantes en Vichayito y Pocitas
      </h2>
    </header>
  );
}
