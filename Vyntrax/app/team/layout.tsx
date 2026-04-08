import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unser Team - Visionäre für digitale Exzellenz",
  description: "Lernen Sie unser Team kennen. Batuhan Yomralioglu und ein Netzwerk aus Spezialisten für digitale Exzellenz.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

