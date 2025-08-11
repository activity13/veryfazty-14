import Image from "next/image";
import Link from "next/link";
import React from "react";
const Partners = () => {
  return (
    <div className="container-screen h-screen">
      <header className="text-center">
        <h2 className="text-6xl font-bold">DELIVERY</h2>
      </header>
      <div className="mt-10 grid grid-cols-2 place-content-between justify-center gap-4 text-center sm:grid-cols-2 md:grid-cols-3">
        <div className="flex justify-center">
          <Link href="/la-k" className="border-none bg-inherit bg-none">
            <Image
              className="cursor-pointer rounded-lg"
              src="/images/la_k_logo.png"
              width={150}
              height={150}
              alt="La K, socio delivery en vichayito tienda delivery veryfazty"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/brosfood" className="border-none bg-inherit bg-none">
            <Image
              className="cursor-pointer rounded-lg"
              src="/images/brosfood.png"
              width={150}
              height={150}
              alt="Brosfood Restaurante Vichayito, socio delivery en Vichayito en tienda veryfazty"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            href="/playa-palmeras-vichayito"
            className="grid place-items-center"
          >
            <Image
              className="cursor-pointer rounded-lg"
              src="/images/playa-palmeras.png"
              width={150}
              height={150}
              alt="Las cabañas de antica socio delivery en tienda web delivery veryfazty vichayito"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/marcilia-vichayito" className="grid place-items-center">
            <Image
              className="cursor-pointer rounded-lg"
              src="/images/Marcilia.png"
              width={150}
              height={150}
              alt="Las cabañas de antica socio delivery en tienda web delivery veryfazty vichayito"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            href="/las-cabanas-de-antica-vichayito"
            className="border-none bg-inherit bg-none"
          >
            <Image
              className="cursor-pointer rounded-lg"
              src="/images/cabanas-antica.png"
              width={150}
              height={150}
              alt="Las cabañas de antica socio delivery en tienda web delivery veryfazty vichayito"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="/deli-antica" className="border-none bg-inherit bg-none">
            <Image
              className="cursor-pointer rounded-lg"
              src="/images/deliAntica.png"
              width={150}
              height={150}
              alt="Deli antica socio delivery en tienda web delivery veryfazty vichayito"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;
