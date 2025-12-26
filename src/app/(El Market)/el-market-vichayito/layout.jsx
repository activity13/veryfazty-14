import React from "react";
import BackArrow from "../../ui/back_arrow";
export const metadata = {
  title: "El Market - Embed",
  description:
    "Versión embebible del Market (sin header ni footer de Veryfazty)",
};

export default function ElMarketLayout({ children }) {
  // This layout intentionally overlays the app so the global header/footer
  // of the main site are visually hidden when this route is active.
  // Using a fixed full-viewport wrapper with high z-index keeps the embed
  // isolated without modifying the root layout.
  return (
    <div className="scrollbar-none fixed inset-0 z-[9999] min-h-screen w-full overflow-auto bg-white">
      <div className="mx-auto max-w-7xl ">{children}</div>
      <BackArrow />
    </div>
  );
}
