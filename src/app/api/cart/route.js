import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Bienvenido al carrito, tu última pedido fue:",
  });
}
