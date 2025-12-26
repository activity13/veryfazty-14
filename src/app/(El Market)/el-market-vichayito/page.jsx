"use client";
import { useState } from "react";

export default function MarketVichayito() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative m-0 h-screen w-full overflow-hidden p-0 bg-white">
      {/* Loader overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
            <span className="text-sm text-slate-600">Cargando menú…</span>
          </div>
        </div>
      )}

      <iframe
        src="https://market-embed-vichayito.viw-carta.com"
        title="Menú de Vichayito"
        className="block h-full w-full"
        style={{ border: "none", display: "block" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
