import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen - Unsere Projekte",
  description: "Lernen Sie unsere erfolgreichen Projekte kennen. Von High-Performance Websites bis zu komplexen Web-Anwendungen.",
};

export default function ReferenzenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

