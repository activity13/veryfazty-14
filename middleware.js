import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host"); // Detectar subdominio
  console.log("host:", host);
  const subdomain = host.split(".")[0]; // Extraer el subdominio
  console.log(subdomain);

  if (subdomain === "cartas") {
    console.log("cartas");
    req.nextUrl.pathname = `/cartas${req.nextUrl.pathname}`;
  } else if (subdomain === "admin") {
    req.nextUrl.pathname = `/admin${req.nextUrl.pathname}`;
  }

  return NextResponse.rewrite(req.nextUrl);
}
