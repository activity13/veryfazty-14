"use client";

import { useEffect } from "react";
import { initIframeAnalyticsListener } from "@/src/lib/analytics";

export default function AnalyticsListener() {
  useEffect(() => {
    const cleanup = initIframeAnalyticsListener();
    return () => cleanup();
  }, []);

  return null;
}
