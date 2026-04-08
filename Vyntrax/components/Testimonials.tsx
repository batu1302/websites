"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "T. M.",
    role: "Geschäftsführer, IT-Unternehmen",
    text: "Die Zusammenarbeit war erstklassig. Unsere neue Website ist nicht nur optisch ein Meisterwerk, sondern hat auch unsere Conversion-Rate deutlich gesteigert.",
  },
  {
    name: "S. S.",
    role: "Gründerin, Designagentur",
    text: "Endlich eine Agentur, die nicht nur schöne Designs liefert, sondern auch messbare Ergebnisse. Der Prozess war transparent und das Ergebnis hat unsere Erwartungen übertroffen.",
  },
  {
    name: "L. W.",
    role: "Marketingleiter, E-Commerce",
    text: "Von der ersten Beratung bis zum Launch lief alles reibungslos. Das Design hat sich direkt positiv auf unsere Verkaufszahlen ausgewirkt.",
  }
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div className="p-8 h-full rounded-3xl bg-[#111111] border border-gray-800 hover:border-[#00CED1]/50 transition-all duration-300 flex flex-col">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#00CED1] text-[#00CED1]" />
              ))}
            </div>
            <p className="text-gray-300 mb-8 italic leading-relaxed text-lg flex-1">
              "{testimonial.text}"
            </p>
            <div className="mt-auto pt-6 border-t border-gray-800">
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-[#00CED1]">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
