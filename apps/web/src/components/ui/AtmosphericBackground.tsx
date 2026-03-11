import React from "react";

// Static CSS-only background — zero JS animation, maximum performance.
// Uses hardware-accelerated CSS transforms only on desktop.
export function AtmosphericBackground() {
  return (
    <div className="atmos-bg pointer-events-none" aria-hidden="true">
      {/* Static gradient glows — no blur animation on mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_20%,rgba(170,192,225,0.3),transparent),radial-gradient(ellipse_60%_60%_at_80%_60%,rgba(67,182,213,0.08),transparent)]" />
      {/* Subtle top edge accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#43B6D5]/20 to-transparent" />
    </div>
  );
}
