"use client";
import { useState } from "react";

export default function LaRinconada() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative m-0 h-[100dvh] w-full overflow-hidden scrollbar-none bg-white p-0">
      {/* Loader overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <span className="text-sm text-slate-600">Cargando menú…</span>
          </div>
        </div>
      )}

      <iframe
        src="https://larinconada-embed.viw-carta.com"
        title="La Rinconada - Carta Digital"
        className="block h-full w-full"
        style={{ border: "none", display: "block" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
