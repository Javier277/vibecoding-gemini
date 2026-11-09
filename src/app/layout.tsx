import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Control de Flota y Rutas · Comunitat Valenciana",
  description: "Simulador logístico de seguimiento GPS y optimización de rutas de autobuses en la Comunitat Valenciana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
