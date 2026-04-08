"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Vercel", img: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
];

export default function SocialProof() {
  return (
    <div className="py-12 border-b border-gray-100 bg-[#fafafa]">
      <div className="text-center mb-10">
        <p className="text-xs text-[#8a8a8a] font-bold tracking-[0.2em] uppercase">
          Entwickelt mit den besten Technologien
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 max-w-6xl mx-auto px-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            title={tech.name}
          >
            <img 
              src={tech.img} 
              alt={tech.name} 
              className={`h-7 md:h-10 object-contain ${
                tech.name === "Next.js" || tech.name === "Vercel" || tech.name === "React" || tech.name === "Tailwind CSS" || tech.name === "TypeScript" 
                  ? "grayscale hover:grayscale-0 transition-all duration-500" 
                  : ""
              }`} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
