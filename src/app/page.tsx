"use client";

import Promos from "@/src/app/ui/promos";
import Partners from "@/src/app/ui/partners";
export default function Home() {
  return (
    <>
      <section className="h-3/4">
        <Promos />
      </section>
      <section className="my-6">
        <Partners />
      </section>
    </>
  );
}
