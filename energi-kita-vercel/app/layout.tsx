import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energi Kita — Belajar Energi Terbarukan",
  description: "Media belajar interaktif energi terbarukan untuk siswa SMP.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
