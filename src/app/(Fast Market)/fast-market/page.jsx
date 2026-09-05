"use client";
import { useState, useEffect } from "react";
import { trackEvent } from "@/src/lib/analytics";

export default function MarketVichayito() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    trackEvent("restaurant_view", {
      restaurant_slug: "fast-market",
      restaurant_name: "Fast Market",
      category: "Minimarket",
    });
    trackEvent("carta_click", {
      restaurant_slug: "fast-market",
      restaurant_name: "Fast Market",
      method: "embed",
    });
  }, []);

  return (
    <div className="relative m-0 h-screen w-full overflow-hidden bg-white p-0">
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
        src="https://market-embed-vichayito.viw-carta.com"
        title="Menú de Vichayito"
        className="block h-full w-full"
        style={{ border: "none", display: "block" }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
