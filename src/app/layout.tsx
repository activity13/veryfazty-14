import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/src/app/ui/header";
import Footer from "@/src/app/ui/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Veryfazty",
    default: "Delivery Vichayito Sur y Las Pocitas - Veryfazty",
  },
  description:
    "Servicio de Delivery en Los Órganos, Vichayito - Mejores restaurantes en Vichayito y también en Máncora, Las Pocitas. Pizzas, pastas, hamburguesas, postres en Vichayito y Las Pocitas. Antica Pizzería Vichayito, la k vichayito, Bros Foods Vichayito, y mucho más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <meta name="robots" content="all" />
      </Head>
      <body>
        <nav className="flex h-1/4 flex-col justify-center align-middle">
          <Header />
        </nav>
        {children}
        <section className="relative z-20 h-full bg-bluefazty">
          <Footer />
        </section>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-YQSMK35DN8" />
      <GoogleTagManager gtmId="G-YQSMK35DN8" />
    </html>
  );
}
