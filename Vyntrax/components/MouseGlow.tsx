"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function MouseGlow() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 0.3 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 0.3 });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let frameId: number | null = null;
    let nextX = -9999;
    let nextY = -9999;

    const flushPosition = () => {
      mouseX.set(nextX);
      mouseY.set(nextY);
      frameId = null;
    };

    const updateMousePosition = (event: MouseEvent) => {
      nextX = event.clientX - 200;
      nextY = event.clientY - 200;

      if (frameId === null) {
        frameId = requestAnimationFrame(flushPosition);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[400px] h-[400px] rounded-full bg-[#00CED1]/10 blur-[100px]"
      />
    </motion.div>
  );
}

