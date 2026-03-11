import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"], // Headlines
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"], // Code/wallet text
});

export const metadata: Metadata = {
  title: "Omen | Trust Architecture for AI & Web3",
  description: "Programmable security primitives, identity graphs, and real-time reputation for the decentralized intelligence era.",
};

import { ToastProvider } from "@/context/ToastContext";
import { EarlyAccessModalProvider } from "@/context/EarlyAccessModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-inter antialiased min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <EarlyAccessModalProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </EarlyAccessModalProvider>
      </body>
    </html>
  );
}

