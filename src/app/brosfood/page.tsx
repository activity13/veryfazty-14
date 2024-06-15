import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bros Food Vichayito",
  description:
    "Delivery en Vichayito, pizzas, hamburguesas, hot-dogs, salchipapas y más.",
};

export default function Brosfood() {
  return (
    <>
      <div className="relative flex w-screen justify-center pt-10">
        <Image
          className="rounded-top rounded-bottom"
          src={`/images/brosfood_carta_2024.png`}
          width="720"
          height="720"
          alt="veryfazty"
        />
        {/* <div className="fixed-top">
        <button
          href="/"
          onClick={() => router.push("/")}
          className={CustomStyles.btnFlotante}
        >
          <a>
            <Image
              className="rounded-top rounded-bottom"
              src="/images/arrow-left-short.svg"
              width="10px"
              height="10px"
              alt="veryfazt-return"
            />
            <h3>Atrás</h3>
          </a>
        </button>
      </div> */}
        <Link href="/" className="absolute ">
          <Image
            className="rounded-top rounded-bottom"
            src="/images/arrow-left-short.svg"
            width={100}
            height={100}
            alt="veryfazt-return"
          />
        </Link>
        <br />
      </div>
    </>
  );
}
