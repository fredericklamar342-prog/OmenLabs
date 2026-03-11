import React from "react";

interface LogoProps {
  className?: string;
  /** Primary color for the logo. Defaults to currentColor. */
  color?: string;
}


/**
 * NEW OMEN LOGO Component
 */
export function Logo({ className = "", color = "currentColor" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Omen Logo"
    >
      <g style={{ color }}>
        {/* O */}
        <circle cx="20" cy="18" r="9.5" stroke="currentColor" strokeWidth="5" />
        <rect x="8" y="34" width="24" height="4" fill="currentColor" rx="1" />

        {/* M */}
        <path
          d="M45 28V8L58 21L71 8V28"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* E */}
        <path
          d="M88 8H106M88 18H104M88 28H106M88 8V28"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <rect x="88" y="34" width="20" height="4" fill="currentColor" rx="1" />

        {/* N */}
        <path
          d="M125 28V8L144 28V8"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <rect x="125" y="34" width="22" height="4" fill="currentColor" rx="1" />
      </g>
    </svg>
  );
}

/**
 * NEW OMEN ICON (For app icons, small spots)
 */
export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-primary rounded-xl overflow-hidden ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" className="w-[65%] h-[65%] text-white">
        <circle cx="20" cy="18" r="10" stroke="currentColor" strokeWidth="5.5" />
        <rect x="6" y="34" width="28" height="4.5" fill="currentColor" rx="1" />
      </svg>
    </div>
  );
}

