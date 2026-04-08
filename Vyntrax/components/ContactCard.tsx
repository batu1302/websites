"use client";

import { motion } from "framer-motion";
import { Mail, Phone, User, MapPin } from "lucide-react";
import Image from "next/image";
import GlassCard from "./GlassCard";

export default function ContactCard() {
  const contactDetails = [
    {
      icon: User,
      label: "Name",
      value: "Batuhan Yomralioglu",
      href: null,
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: "info@vyntrax.de",
      href: "mailto:info@vyntrax.de",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+49 151 280 13 700",
      href: "tel:+4915128013700",
    },
    {
      icon: MapPin,
      label: "Standort",
      value: "Balingen, Baden-Württemberg",
      href: null,
    },
  ];

  return (
    <GlassCard className="p-8 h-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 transition-colors duration-300" hover={false}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100 dark:border-gray-800">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#00CED1]/20 relative shrink-0">
            <Image
              src="/batuhan.jpg"
              alt="Batuhan Yomralioglu"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">
              Batuhan Yomralioglu
            </h3>
            <p className="text-[#00CED1] font-medium transition-colors duration-300">
              Lead Developer & Gründer
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#1a1a1a] dark:text-white mb-2 transition-colors duration-300">
            Direkter Kontakt
          </h4>
          <p className="text-[#4a4a4a] dark:text-gray-300 transition-colors duration-300">
            Lassen Sie uns über Ihr Projekt sprechen
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            const content = (
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 rounded-xl bg-[#00CED1]/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#00CED1]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[#6a6a6a] dark:text-gray-400 mb-1 transition-colors duration-300">
                    {detail.label}
                  </div>
                  <div className="text-[#1a1a1a] dark:text-gray-200 font-medium group-hover:text-[#00CED1] dark:group-hover:text-[#00CED1] transition-colors duration-300">
                    {detail.value}
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {detail.href ? (
                  <a href={detail.href}>{content}</a>
                ) : (
                  <div>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <p className="text-sm text-[#6a6a6a] dark:text-gray-400 leading-relaxed transition-colors duration-300">
            ⚡ Antwortzeit: Innerhalb von 24 Stunden
            <br />
            🎯 Kostenlose Erstberatung verfügbar
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

