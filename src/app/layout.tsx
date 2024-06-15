import type { Metadata } from "next";
import Header from "@/src/app/ui/header";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Veryfazty",
    default: "Delivery Vichayito Sur y Las Pocitas - Veryfazty",
  },
  description:
    "Delivery Vichayito - Mejores restaurantes en Vichayito y Las Pocitas, pizzas, pastas, hamburguesas, postres en Vichayito y Las Pocitas. Antica Pizzería Vichayito, la k vichayito, Bros Foods Vichayito, y mucho más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex h-1/4 flex-col justify-center align-middle">
          <Header />
        </nav>
        {children}
      </body>
    </html>
  );
}
