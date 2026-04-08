"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import MagneticButton from "@/components/MagneticButton";
import { Palette, Zap, Target, CheckCircle } from "lucide-react";

export default function WebdesignPage() {
  const features = [
    {
      icon: Palette,
      title: "Pixel-Perfektion",
      description: "Jedes Detail zählt. Wir gestalten Interfaces, die nicht nur schön aussehen, sondern auch intuitiv zu bedienen sind.",
    },
    {
      icon: Zap,
      title: "Moderne Ästhetik",
      description: "Zeitlose Designs, die Ihre Marke perfekt repräsentieren und Ihre Zielgruppe begeistern.",
    },
    {
      icon: Target,
      title: "Nutzerzentriert",
      description: "Jede Design-Entscheidung basiert auf Daten und Nutzerforschung für maximale Conversion.",
    },
    {
      icon: CheckCircle,
      title: "Responsive Design",
      description: "Perfekt auf allen Geräten – von Smartphone bis Desktop. Einheitliches Erlebnis überall.",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Webdesign"
          subtitle="Pixel-Perfektion trifft auf außergewöhnliches Nutzererlebnis"
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
                Warum <span className="text-[#00CED1]">Design</span> entscheidend ist
              </h2>
              <p className="text-lg text-[#4a4a4a] dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                In einer Welt, in der Nutzer in Sekunden entscheiden, ob sie auf Ihrer Website bleiben,
                macht der erste Eindruck den Unterschied. Unser Design-Ansatz kombiniert ästhetische
                Exzellenz mit strategischer Funktionalität.
              </p>
              <p className="text-lg text-[#4a4a4a] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Jedes Element wird sorgfältig durchdacht – von der Farbpalette bis zur Typografie,
                von der Navigation bis zum Call-to-Action. Das Ergebnis: Websites, die nicht nur
                schön sind, sondern auch konvertieren.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#f5f5f5] dark:bg-[#050505] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] dark:text-white mb-6 transition-colors duration-300">
              Bereit für Ihr <span className="text-[#00CED1]">nächstes Projekt</span>?
            </h2>
            <p className="text-xl text-[#4a4a4a] dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors duration-300">
              Lassen Sie uns gemeinsam ein Design schaffen, das Ihre Vision perfekt widerspiegelt.
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

