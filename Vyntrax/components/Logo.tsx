"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
  animated?: boolean;
}

export default function Logo({ className = "", animated = true }: LogoProps) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`inline-flex items-center gap-3 cursor-pointer select-none ${className}`}
      initial={animated && !reduce ? { opacity: 0, x: -12 } : { opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-label="Vyntrax – Startseite"
    >
      {/* ─── V-Icon SVG — 100% transparent, no background ─── */}
      <motion.svg
        width="56"
        height="56"
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        animate={{
          filter: hovered
            ? [
                "drop-shadow(0 0 8px #00CED1) drop-shadow(0 0 22px rgba(0,206,209,0.55)) drop-shadow(0 0 40px rgba(0,168,171,0.3))",
                "drop-shadow(0 0 12px #00E8EB) drop-shadow(0 0 30px rgba(0,232,235,0.65)) drop-shadow(0 0 50px rgba(0,206,209,0.35))",
                "drop-shadow(0 0 8px #00CED1) drop-shadow(0 0 22px rgba(0,206,209,0.55)) drop-shadow(0 0 40px rgba(0,168,171,0.3))",
              ]
            : "drop-shadow(0 0 5px rgba(0,206,209,0.45)) drop-shadow(0 0 12px rgba(0,168,171,0.2))",
        }}
        transition={
          hovered
            ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.4 }
        }
      >
        <defs>
          {/* Main cyan gradient */}
          <linearGradient id="g-fill" x1="0" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%"  stopColor="#00E8EB" />
            <stop offset="50%" stopColor="#00CED1" />
            <stop offset="100%" stopColor="#009EA0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="vglow" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feColorMatrix in="blur" type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0.85
                      0 0 0 0 0.84
                      0 0 0 0.9 0" result="colorBlur" />
            <feMerge>
              <feMergeNode in="colorBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Inner circuit lines pattern clip */}
          <clipPath id="v-clip">
            {/* Outer V shape for clipping circuit lines */}
            <path d="M4 4 L50 108 L96 4 L82 4 L50 80 L18 4 Z" />
          </clipPath>
        </defs>

        {/* ── Outer V (filled, main shape) ── */}
        <motion.path
          d="M4 4 L50 108 L96 4 L82 4 L50 80 L18 4 Z"
          fill="url(#g-fill)"
          filter="url(#vglow)"
          animate={{ opacity: hovered ? 1 : 0.92 }}
          transition={{ duration: 0.35 }}
        />

        {/* ── Inner cutout V — creates the hollow feel ── */}
        <path
          d="M22 10 L50 74 L78 10 L70 10 L50 62 L30 10 Z"
          fill="transparent"
          className="fill-white dark:fill-[#0a0a0a]"
          style={{ transition: "fill 0.3s ease" }}
        />

        {/* ── Circuit line 1 inside left arm ── */}
        <motion.line x1="24" y1="12" x2="37" y2="42"
          stroke="#00CED1" strokeWidth="1.2" strokeLinecap="round"
          opacity={hovered ? 0.8 : 0.5}
          style={{ transition: "opacity 0.3s" }}
        />
        <motion.line x1="37" y1="42" x2="37" y2="36"
          stroke="#00CED1" strokeWidth="1.2" strokeLinecap="round"
          opacity={hovered ? 0.8 : 0.5}
        />
        <motion.circle cx="37" cy="36" r="1.8" fill="#00CED1" opacity={hovered ? 1 : 0.5} />

        {/* ── Circuit line 2 inside left arm ── */}
        <motion.line x1="30" y1="12" x2="41" y2="38"
          stroke="#00E8EB" strokeWidth="1" strokeLinecap="round"
          opacity={hovered ? 0.7 : 0.35}
        />

        {/* ── Circuit line 1 inside right arm ── */}
        <motion.line x1="76" y1="12" x2="63" y2="42"
          stroke="#00CED1" strokeWidth="1.2" strokeLinecap="round"
          opacity={hovered ? 0.8 : 0.5}
        />
        <motion.line x1="63" y1="42" x2="63" y2="36"
          stroke="#00CED1" strokeWidth="1.2" strokeLinecap="round"
          opacity={hovered ? 0.8 : 0.5}
        />
        <motion.circle cx="63" cy="36" r="1.8" fill="#00CED1" opacity={hovered ? 1 : 0.5} />

        {/* ── Circuit line 2 inside right arm ── */}
        <motion.line x1="70" y1="12" x2="59" y2="38"
          stroke="#00E8EB" strokeWidth="1" strokeLinecap="round"
          opacity={hovered ? 0.7 : 0.35}
        />

        {/* ── Extra speed-lines (top right, like in the original) ── */}
        <motion.line x1="86" y1="4" x2="100" y2="4"
          stroke="url(#g-fill)" strokeWidth="2.5" strokeLinecap="round"
          animate={{ x2: hovered ? 106 : 100, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <motion.line x1="88" y1="10" x2="100" y2="10"
          stroke="url(#g-fill)" strokeWidth="2" strokeLinecap="round"
          animate={{ x2: hovered ? 104 : 100, opacity: hovered ? 0.85 : 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* ── Centre bottom dot glow ── */}
        <motion.circle
          cx="50" cy="108" r={hovered ? 3 : 2}
          fill="#00E8EB"
          animate={{ r: hovered ? 3.5 : 2.2, opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>

      {/* ─── Wordmark ─── */}
      <div className="flex flex-col justify-center leading-none">
        <motion.p
          className="font-black uppercase m-0 p-0 text-[#111111] dark:text-white transition-colors duration-300"
          style={{
            fontSize: "1.45rem",
            fontFamily: "var(--font-geist-sans), 'Inter', system-ui, sans-serif",
          }}
          animate={{ letterSpacing: hovered ? "0.28em" : "0.18em" }}
          transition={{ duration: 0.35 }}
        >
          VYNTR
          <motion.span
            animate={{ color: hovered ? "#00E8EB" : "#00CED1" }}
            transition={{ duration: 0.3 }}
            style={{ color: "#00CED1" }}
          >
            AX
          </motion.span>
        </motion.p>

        {/* Animated gradient underline */}
        <motion.div
          style={{
            height: "2px",
            borderRadius: "99px",
            background: "linear-gradient(90deg, #00CED1 0%, #00E8EB 50%, transparent 100%)",
            transformOrigin: "left center",
            marginTop: "4px",
          }}
          animate={{
            scaleX: hovered ? 1 : 0.35,
            opacity: hovered ? 1 : 0.25,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
