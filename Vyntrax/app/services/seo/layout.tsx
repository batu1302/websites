import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Optimierung - Sichtbarkeit & messbarer Erfolg",
  description: "Professionelle SEO-Optimierung für nachhaltige Sichtbarkeit in Suchmaschinen. Messbare Ergebnisse durch datengetriebene Strategien.",
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

