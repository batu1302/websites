import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Karriere - Stellenangebote bei Vyntrax",
  description: "Aktuell suchen wir aktiv keine neuen Mitarbeiter. Initiativbewerbungen von starken Talenten sind dennoch jederzeit willkommen.",
};

export default function KarrierePage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Karriere"
          subtitle="Derzeit keine offenen Stellen"
        />

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 text-center transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white mb-6 transition-colors duration-300">
                Aktuell keine offenen <span className="text-[#00CED1]">Stellen</span>
              </h2>
              <p className="text-lg text-[#4a4a4a] dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto transition-colors duration-300">
                Derzeit ist unser Team komplett und wir suchen aktiv keine neuen Mitarbeiter. 
                Wir wachsen jedoch stetig weiter! Wenn Sie denken, dass Sie perfekt zu uns passen, 
                dürfen Sie uns dennoch gerne eine Initiativbewerbung für zukünftige Positionen senden.
              </p>
              <div className="bg-[#f5f5f5] dark:bg-[#1a1a1a] rounded-2xl p-8 transition-colors duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#00CED1]" />
                  <a
                    href="mailto:info@vyntrax.de"
                    className="text-xl font-semibold text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                  >
                    info@vyntrax.de
                  </a>
                </div>
                <p className="text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
                  Initiativbewerbung (Portfolio & Lebenslauf) senden
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

