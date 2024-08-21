// app/layouts.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"; // Estilos globales
import "slick-carousel/slick/slick.css"; // Estilos de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProyectoX",
  description: "Stream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
