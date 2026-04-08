"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import MagneticButton from "@/components/MagneticButton";
import { Code, Rocket, Shield, Gauge } from "lucide-react";

export default function EntwicklungPage() {
  const features = [
    {
      icon: Code,
      title: "Moderne Technologien",
      description: "Next.js, React, TypeScript – wir nutzen die besten Tools für maximale Performance und Entwicklerfreundlichkeit.",
    },
    {
      icon: Rocket,
      title: "Blitzschnell",
      description: "Optimierte Ladezeiten durch Code-Splitting, Server-Side Rendering und intelligentes Caching.",
    },
    {
      icon: Shield,
      title: "Sicher & Skalierbar",
      description: "Robuste Architektur, die mit Ihrem Business wächst. Sicherheit steht an erster Stelle.",
    },
    {
      icon: Gauge,
      title: "Performance-Optimiert",
      description: "Lighthouse-Scores von 90+ sind Standard. Jede Millisekunde zählt für Ihre Conversion-Rate.",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Webentwicklung"
          subtitle="High-Performance Lösungen, die skalieren"
        />

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 hover:border-[#00CED1]/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#00CED1]/10">
                        <Icon className="w-6 h-6 text-[#00CED1]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-2 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-[#4a4a4a] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#f5f5f5] dark:bg-[#111111] rounded-3xl p-8 md:p-12 transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white mb-6 transition-colors duration-300">
                Technologie-<span className="text-[#00CED1]">Stack</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <div
                    key={tech}
                    className="p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-center transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-[#1a1a1a] dark:text-white transition-colors duration-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#f5f5f5] dark:bg-[#050505] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] dark:text-white mb-6 transition-colors duration-300">
              Starten Sie Ihr <span className="text-[#00CED1]">nächstes Projekt</span>
            </h2>
            <p className="text-xl text-[#4a4a4a] dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors duration-300">
              Lassen Sie uns gemeinsam eine Lösung entwickeln, die Ihre Anforderungen perfekt erfüllt.
            </p>
            <MagneticButton href="/#kontakt" className="text-center">
              <span className="px-8 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-full hover:bg-[#00A8AB] transition-all duration-300 shadow-sm hover:shadow-md block">
                Projekt starten
              </span>
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

