import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <div className="relative">
      <div className="relative z-30">
        <div className="container-fluid bg-bluefazty py-4 text-center text-white">
          <h3>HAZ TU PEDIDO</h3>
          <h4>ESCRIBE o LLAMA</h4>
          <div className="ml-2 mt-1 flex justify-center">
            <Image
              src="/images/whatsapp_solid.png"
              width={75}
              height={71}
              alt="VeryFazty contact"
            />
          </div>
          <h1>
            <a
              href="https://wa.me/51924380097"
              rel="noreferrer"
              target="_blank"
            >
              <u>+51 924 380 097</u>
            </a>
          </h1>
          <section className="flex justify-center p-1">
            <div className="mx-1">
              <Image
                src="/images/efectivo.png"
                height={29}
                width={29}
                alt="veryfazty, haz tu pedido y paga a tu gusto."
              />
            </div>
            <div className="mx-1">
              <Image
                src="/images/yape.png"
                height={29}
                width={29}
                alt="veryfazty, haz tu pedido y paga a tu gusto."
              />
            </div>
            <div className="mx-1">
              <Image
                src="/images/plin.png"
                height={29}
                width={29}
                alt="veryfazty, haz tu pedido y paga a tu gusto."
              />
            </div>
          </section>
          <span>2023 © veryfazty.com, todos los derechos reservados.</span>
        </div>
      </div>
      <section className="fixed bottom-0 z-20 flex w-full flex-row items-center justify-center bg-bluefazty text-white">
        <a
          className="flex  items-center justify-center"
          href="https://wa.me/51924380097"
          rel="noreferrer"
          target="_blank"
        >
          <u className="mr-2 mt-1 flex items-center">¡Haz tu pedido!</u>
          <span className="mt-2 flex items-center">+51 924 380 097</span>
          <div className="ml-2 mt-1 flex items-center">
            <Image
              src="/images/phone.png"
              width={25}
              height={25}
              alt="llamar veryfazty delivery"
            />
          </div>
          <div className="ml-2 mt-1 flex items-center">
            <Image
              src="/images/whatsapp_solid.png"
              width={25}
              height={25}
              alt="whatsapp veryfazty delivery"
            />
          </div>
        </a>
      </section>
    </div>
  );
};

export default Footer;
