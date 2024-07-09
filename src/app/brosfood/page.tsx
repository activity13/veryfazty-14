import Image from "next/image";
import type { Metadata } from "next";
import BackArrow from "../ui/back_arrow";
export const metadata: Metadata = {
  title: "Bros Food Vichayito",
  description:
    "Delivery en Vichayito, pizzas, hamburguesas, hot-dogs, salchipapas y más.",
};

export default function Brosfood() {
  return (
    <>
      <div></div>
      <div className="static flex justify-center pt-10">
        <Image
          className="w-100"
          src={`/images/2024_carta_sin_logo.jpg`}
          width="720"
          height="720"
          alt="veryfazty"
        />
        <BackArrow />
        <br />
      </div>
    </>
  );
}
