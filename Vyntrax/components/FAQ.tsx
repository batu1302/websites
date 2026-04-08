"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Wie lange dauert die Umsetzung?",
    answer: "In der Regel 2 bis 4 Wochen, abhängig vom Projektumfang. Bei kleineren Projekten können wir auch schneller liefern, größere Enterprise-Lösungen benötigen entsprechend mehr Zeit.",
  },
  {
    question: "Ist die Seite für Google optimiert?",
    answer: "Ja, durch High-Performance Code und SEO-Best-Practices. Wir setzen auf Next.js für optimale Ladezeiten, strukturierte Daten, Meta-Tags und eine saubere technische Umsetzung für beste Rankings.",
  },
  {
    question: "Bieten Sie auch Wartung an?",
    answer: "Ja, wir lassen Sie nach dem Launch nicht allein. Unsere Wartungspakete umfassen regelmäßige Updates, Security-Patches, Performance-Optimierungen und technischen Support.",
  },
  {
    question: "Was kostet ein Projekt?",
    answer: "Ihre Investition in ein hochkonvertierendes Performance-Upgrade startet aktuell bei nur 399€ (statt 950€). Ein komplettes, maßgeschneidertes Business-System erhalten Sie für 999€. Der Clou: Sie tragen absolut null Risiko. Durch unsere eiserne Performance-Garantie sichern wir Ihnen einen Google-Lighthouse-Score von mindestens 90+ zu. Verfehlen wir dieses Ziel, arbeiten wir völlig kostenlos weiter – oder Sie erhalten Ihre gesamte Investition sofort zurück.",
  },
  {
    question: "Kann ich die Inhalte später selbst ändern?",
    answer: "Absolut! Wir setzen auf moderne Content-Management-Systeme oder bieten intuitive Admin-Bereiche, damit Sie jederzeit selbstständig Änderungen vornehmen können – ganz ohne Programmierkenntnisse.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-[#00CED1]/50 dark:hover:border-[#00CED1]/50 transition-colors duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left group"
          >
            <span className="text-lg md:text-xl font-semibold text-[#1a1a1a] dark:text-white pr-8 group-hover:text-[#00CED1] dark:group-hover:text-[#00CED1] transition-colors duration-300">
              {faq.question}
            </span>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-[#00CED1]" />
              ) : (
                <Plus className="w-6 h-6 text-[#6a6a6a] dark:text-gray-400 group-hover:text-[#00CED1] transition-colors duration-300" />
              )}
            </div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-[#4a4a4a] dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

