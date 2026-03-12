import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Omen | Security Infrastructure",
  description: "Enterprise-grade identity and threat intelligence for decentralized ecosystems.",
  icons: {
    icon: [
      { url: "/omen-logo.png", sizes: "512x512", type: "image/png" },
      { url: "/omen-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/omen-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/omen-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/omen-logo.png",
  },
  openGraph: {
    title: "Omen | Security Infrastructure",
    description: "Enterprise-grade identity and threat intelligence for decentralized ecosystems.",
    images: [{ url: "/omen-logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Omen | Security Infrastructure",
    description: "Enterprise-grade identity and threat intelligence for decentralized ecosystems.",
    images: ["/omen-logo.png"],
  },
};


import { ToastProvider } from "@/context/ToastContext";
import { EarlyAccessModalProvider } from "@/context/EarlyAccessModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-inter antialiased min-h-screen bg-background text-foreground selection:bg-accent/30`}
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
