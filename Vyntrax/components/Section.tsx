import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "gradient";
}

export default function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  const variantStyles = {
    default: "bg-white text-[#1a1a1a]",
    dark: "bg-[#0a1628] text-white",
    gradient: "bg-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8",
        variantStyles[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

