import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding - Starke Markenidentität",
  description: "Professionelles Branding, das Ihre Marke unvergesslich macht. Von Logo-Design bis zur kompletten Markenstrategie.",
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

