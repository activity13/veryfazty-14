"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/src/app/ui/header";
import Promos from "@/src/app/ui/promos";
export default function Home() {
  return (
    <>
      <section className="h-screen">
        <nav className="flex h-1/4 flex-col justify-center align-middle">
          <Header />
        </nav>
        <div className="h-3/4">
          <Promos />
        </div>
      </section>
      <section className="h-screen bg-rose-300"></section>
      <section className="h-80 bg-blue-300"></section>
    </>
  );
}
