"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonGlowProps {
  children: ReactNode;
  className?: string;
  color?: "cyan" | "amber" | "teal" | "gold";
  intensity?: "low" | "medium" | "high";
}

export default function NeonGlow({
  children,
  className = "",
  color = "cyan",
  intensity = "medium",
}: NeonGlowProps) {
  const colorMap = {
    cyan: "from-cyan-400 via-cyan-500 to-cyan-600",
    amber: "from-amber-400 via-amber-500 to-amber-600",
    teal: "from-teal-400 via-teal-500 to-teal-600",
    gold: "from-yellow-400 via-yellow-500 to-yellow-600",
  };

  const intensityMap = {
    low: "opacity-40 blur-sm",
    medium: "opacity-60 blur-md",
    high: "opacity-80 blur-lg",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Neon Glow Hintergrund - KRASSER */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colorMap[color]} ${intensityMap[intensity]} -z-10`}
        animate={{
          opacity: [0.4, 0.8, 0.5, 0.4],
          scale: [1, 1.1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Zweiter Glow Layer - INTENSIVER */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colorMap[color]} ${intensityMap[intensity]} -z-10 blur-2xl`}
        animate={{
          opacity: [0.3, 0.6, 0.4, 0.3],
          scale: [1, 1.15, 1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      {/* Dritter Glow Layer - EXTRA Tiefe */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colorMap[color]} opacity-20 -z-10 blur-3xl`}
        animate={{
          opacity: [0.15, 0.35, 0.2, 0.15],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Pulsierender Ring */}
      <motion.div
        className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${colorMap[color]} -z-10 rounded-lg`}
        animate={{
          opacity: [0, 0.4, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(90deg, transparent, var(--tw-gradient-stops), transparent)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </div>
  );
}

