"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";

export default function CTASection() {
  return (
    <GlassCard className="relative overflow-hidden bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 transition-colors duration-300" hover={false}>
      <div className="relative z-10 py-24 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#00CED1]" />
            <span className="text-sm font-medium text-[#00CED1]">
              Limitierte Plätze verfügbar
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1a1a1a] dark:text-white transition-colors duration-300">
            Bereit für das <span className="text-[#00CED1]">nächste Level</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-[#4a4a4a] dark:text-gray-300 max-w-2xl mx-auto mb-10 transition-colors duration-300">
            Lassen Sie uns gemeinsam Ihre Vision in eine digitale Realität verwandeln.
            Starten Sie jetzt Ihr Projekt.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-full shadow-sm hover:shadow-md hover:bg-[#00A8AB] transition-all duration-300 flex items-center gap-2"
            >
              Projekt starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-[#111111] border-2 border-[#00CED1] text-[#00CED1] text-lg font-semibold rounded-full hover:bg-[#00CED1]/5 dark:hover:bg-[#00CED1]/10 transition-all duration-300"
            >
              Kostenlose Beratung
            </motion.a>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00CED1]" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00CED1]" />
              <span>Keine versteckten Kosten</span>
            </div>
          </div>
        </motion.div>
      </div>
    </GlassCard>
  );
}

