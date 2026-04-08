import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webentwicklung - High-Performance Lösungen",
  description: "Moderne Webentwicklung mit Next.js, React und TypeScript. Schnelle, sichere und skalierbare Web-Anwendungen.",
};

export default function EntwicklungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

