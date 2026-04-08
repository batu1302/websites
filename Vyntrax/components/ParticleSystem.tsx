"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const navigatorWithDeviceMemory = navigator as Navigator & {
      deviceMemory?: number;
    };
    const memory = navigatorWithDeviceMemory.deviceMemory ?? 4;
    const isLowPowerDevice =
      window.innerWidth < 1024 ||
      navigator.hardwareConcurrency <= 4 ||
      memory <= 4;

    const maxDpr = isLowPowerDevice ? 1 : 1.5;
    const particleCount = isLowPowerDevice ? 36 : 64;
    const maxConnectionDistance = isLowPowerDevice ? 120 : 160;
    const maxConnectionDistanceSq = maxConnectionDistance * maxConnectionDistance;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
      "rgba(0, 206, 209, 0.4)", // Türkis
      "rgba(0, 168, 171, 0.4)", // Dunkler Türkis
      "rgba(32, 224, 227, 0.3)", // Heller Türkis
    ];

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * (isLowPowerDevice ? 0.5 : 0.9),
      vy: (Math.random() - 0.5) * (isLowPowerDevice ? 0.5 : 0.9),
      size: Math.random() * (isLowPowerDevice ? 2.2 : 3) + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 260 + 120,
    });

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle());
    }

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index++) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
          continue;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = isLowPowerDevice ? 8 : 14;
        ctx.shadowColor = particle.color;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < maxConnectionDistanceSq) {
            const opacity = 0.18 * (1 - distanceSq / maxConnectionDistanceSq);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 206, 209, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      particlesRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

