"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Palette, Sparkles, Gauge } from "lucide-react";
import { ReactNode, useRef } from "react";

interface BentoCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
  delay?: number;
  variant?: "default" | "stat";
  statValue?: string;
  statLabel?: string;
}

function BentoCard({ 
  icon, 
  title, 
  description, 
  className, 
  delay = 0,
  variant = "default",
  statValue,
  statLabel
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !window.matchMedia('(hover: hover)').matches) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div className="relative group h-full rounded-3xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-10 hover:border-[#00CED1]/50 dark:hover:border-[#00CED1]/50 transition-all duration-500 hover:shadow-md">
        <div className="relative z-10 h-full flex flex-col">
          {variant === "default" ? (
            <>
              <div className="mb-6 p-3 rounded-xl bg-[#00CED1]/10 w-fit group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">
                {title}
              </h3>
              <p className="text-[#4a4a4a] dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </>
          ) : (
            <>
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-4 rounded-2xl bg-[#00CED1]/10 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <div className="text-6xl font-bold text-[#00CED1] mb-2">
                  {statValue}
                </div>
                <div className="text-lg font-semibold text-[#1a1a1a] dark:text-white mb-2">{title}</div>
                <div className="text-sm text-[#6a6a6a] dark:text-gray-400">{statLabel}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
      {/* Große Karte - Span 2 */}
      <BentoCard
        icon={<Zap className="w-10 h-10 text-[#00CED1]" />}
        title="High-Performance Web-Apps"
        description="Blitzschnelle Next.js Anwendungen mit perfektem SEO. Wir nutzen modernste Technologien für maximale Performance und optimale Ladezeiten, die Ihre Conversion-Rate steigern."
        className="md:col-span-2"
        delay={0}
      />

      {/* Kleine Statistik-Karte */}
      <BentoCard
        icon={<Gauge className="w-12 h-12 text-[#00CED1]" />}
        title="Performance"
        statValue="90+"
        statLabel="Lighthouse Score"
        variant="stat"
        delay={0.1}
      />

      {/* Mittlere Karte */}
      <BentoCard
        icon={<Palette className="w-10 h-10 text-[#00CED1]" />}
        title="UI/UX Design"
        description="Nutzerzentriertes Design, das begeistert. Von der ersten Skizze bis zum finalen Pixel – wir schaffen Erlebnisse, die im Gedächtnis bleiben und Ihre Marke stärken."
        delay={0.2}
      />

      {/* Mittlere Karte - Span 2 */}
      <BentoCard
        icon={<Sparkles className="w-10 h-10 text-[#00CED1]" />}
        title="KI-Automatisierung"
        description="Intelligente Workflows, die Zeit sparen. Wir integrieren modernste KI-Technologien, um repetitive Aufgaben zu automatisieren und personalisierte Nutzererlebnisse zu schaffen, die konvertieren."
        className="md:col-span-2"
        delay={0.3}
      />
    </div>
  );
}

