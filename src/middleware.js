import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const visited = request.cookies.get("visited");

  // Redirigir solo si el usuario no ha visto la página de vacaciones
  if (!visited) {
    url.pathname = "/news";
    const response = NextResponse.redirect(url);

    // Establece la cookie "visited" para recordar que el usuario ya fue redirigido
    response.cookies.set("visited", "true", { maxAge: 60 * 60 * 24 }); // 1 día
    return response;
  }

  // Si ya tiene la cookie, permitir explorar la página normalmente
  return NextResponse.next();
}

export const config = {
  matcher: "/(.*)", // Aplica el middleware a la página de inicio
};
