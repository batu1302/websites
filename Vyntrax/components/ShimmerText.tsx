"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
}

export default function ShimmerText({ children, className = "" }: ShimmerTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      {/* Haupt-Shimmer */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(6,182,212,0.4), rgba(251,191,36,0.4), rgba(255,255,255,0.5), transparent)",
          width: "50%",
        }}
      />
      {/* Sekundärer Shimmer - andere Richtung */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-l from-transparent via-indigo-300/30 to-transparent"
        initial={{ x: "200%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(270deg, transparent, rgba(6,182,212,0.4), rgba(251,191,36,0.3), transparent)",
          width: "40%",
        }}
      />
      {/* Glow-Effekt */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-amber-500/20 to-teal-500/20 blur-xl -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}

