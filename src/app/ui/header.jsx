//Utiles
import Link from "next/link";
import Image from "next/image";
//Custom Styles

export default function Page() {
  return (
    <header className="h-[25vh] pt-5 text-center">
      <div className="mb-5 flex flex-row justify-center">
        <h1 className="title text-5xl md:text-7xl">
          <Link href="/">Veryfazty</Link>
        </h1>
        <div>
          <Image
            className="md:pt-3"
            src="/images/solo-moto.png"
            width="65"
            height="50"
            alt="logo de veryfazty, reparto a domicilio en vichayito y pocitas"
          />
        </div>
      </div>
      <h2 className="md:text-3xl">
        Delivery de los mejores restaurantes en Vichayito y Pocitas
      </h2>
    </header>
  );
}
