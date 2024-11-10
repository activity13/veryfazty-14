import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div className="container h-screen">
      <div className="flex flex-col">
        {/* .gif */}
        <div className="order-3 mr-44 flex md:order-1 md:justify-end">
          <Image
            width={200}
            height={200}
            alt="Veryfazty vacations"
            src={"/images/vacaciones.gif"}
          />
        </div>
        {/* Aviso */}
        <div className="order-2">
          <h1 className="text-center align-middle text-6xl">
            Estamos de vacaciones, ¡Volvemos muy pronto!
          </h1>
        </div>
        <br />
        <br />
        {/* ir a inicio */}
        <div className="order-2 flex-col justify-center md:order-3">
          <h2 className="text-center text-2xl">
            Mientras tanto puedes ver nuestra selección en el
          </h2>
          <br />
          <div className="flex justify-center">
            <Link
              className="rounded-full bg-bluefazty px-6 py-2 text-2xl text-white  "
              href="/"
            >
              INICIO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
