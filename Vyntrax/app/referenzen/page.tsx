"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { CheckCircle, Star, TrendingUp, ShoppingCart, Brain, Home } from "lucide-react";

export default function ReferenzenPage() {
  const stats = [
    { label: "Projekte", value: "19+", icon: CheckCircle },
    { label: "Zufriedenheit", value: "99%", icon: Star },
    { label: "Performance", value: "90+", icon: TrendingUp, suffix: "Lighthouse" },
  ];

  const projects = [
    {
      title: "E-Commerce Plattform",
      description: "Moderne Online-Shop-Lösung mit optimiertem Checkout-Prozess und integriertem Payment-System.",
      icon: ShoppingCart,
      className: "md:col-span-2",
    },
    {
      title: "KI-Dashboard",
      description: "Intelligentes Analytics-Dashboard mit Echtzeit-Datenvisualisierung und Machine-Learning-Integration.",
      icon: Brain,
      className: "md:col-span-1",
    },
    {
      title: "Portfolio für Immobilien",
      description: "Elegante Präsentationsplattform für Immobilienprojekte mit 360°-Touren und interaktiven Grundrissen.",
      icon: Home,
      className: "md:col-span-2",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Referenzen"
          subtitle="Erfolgreiche Projekte, die sprechen"
        />

        {/* Stats Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 text-center transition-colors duration-300"
                  >
                    <div className="inline-flex items-center justify-center p-4 rounded-xl bg-[#00CED1]/10 mb-4">
                      <Icon className="w-8 h-8 text-[#00CED1]" />
                    </div>
                    <div className="text-4xl font-bold text-[#1a1a1a] dark:text-white mb-2 transition-colors duration-300">
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-lg text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300"> {stat.suffix}</span>
                      )}
                    </div>
                    <div className="text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Bento Grid */}
        <section className="py-24 bg-[#f5f5f5] dark:bg-[#050505] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] dark:text-white mb-16 text-center transition-colors duration-300">
              Ausgewählte <span className="text-[#00CED1]">Projekte</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${project.className} p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 hover:border-[#00CED1]/50 transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-[#00CED1]/10">
                        <Icon className="w-6 h-6 text-[#00CED1]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[#4a4a4a] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f5f5f5] dark:bg-[#111111] rounded-3xl p-8 md:p-12 transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white mb-6 text-center transition-colors duration-300">
                Unsere <span className="text-[#00CED1]">Erfolge</span>
              </h2>
              <p className="text-lg text-[#4a4a4a] dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto transition-colors duration-300">
                Über 19 erfolgreiche Projekte sprechen für sich. Von kleinen Business-Websites
                bis zu komplexen Enterprise-Lösungen – wir haben für jede Herausforderung die
                richtige Lösung. Unsere Kunden schätzen unsere Zuverlässigkeit, unsere
                technische Exzellenz und unser Engagement für ihre Erfolge.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

