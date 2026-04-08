"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section className={`py-24 md:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-tight mb-6">
            <span className="text-[#00CED1]">{title.split(' ')[0]}</span>
            {title.split(' ').slice(1).join(' ') && (
              <span className="text-[#1a1a1a] dark:text-white transition-colors duration-300"> {title.split(' ').slice(1).join(' ')}</span>
            )}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#4a4a4a] dark:text-gray-300 font-light max-w-2xl mx-auto transition-colors duration-300"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

