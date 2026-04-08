import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative group rounded-3xl bg-white dark:bg-[#111111]",
        "border border-gray-200 dark:border-gray-800",
        "shadow-sm",
        "transition-all duration-500",
        hover && "hover:-translate-y-1 hover:shadow-md hover:border-[#00CED1]/30 dark:hover:border-[#00CED1]/30",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

