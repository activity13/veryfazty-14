"use client";

import Promos from "@/src/app/ui/promos";
import Footer from "@/src/app/ui/footer";
import Partners from "@/src/app/ui/partners";
export default function Home() {
  return (
    <>
      <section className="h-3/4">
        <Promos />
      </section>
      <section className="flex h-screen justify-center">
        <Partners />
      </section>
      <section className="relative z-20 h-full bg-bluefazty">
        <Footer />
      </section>
    </>
  );
}
