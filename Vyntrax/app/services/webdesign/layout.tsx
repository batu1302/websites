import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign - Pixel-Perfektion & Nutzererlebnis",
  description: "Professionelles Webdesign, das nicht nur beeindruckt, sondern messbare Ergebnisse liefert. Pixel-perfekte Designs mit Fokus auf Nutzererlebnis.",
};

export default function WebdesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

