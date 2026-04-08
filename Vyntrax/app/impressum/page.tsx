import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Vyntrax.",
};

export default function ImpressumPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero title="Impressum" />

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-[#4a4a4a] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Angaben gemäß § 5 DDG</h2>
                  <p>
                    Batuhan Yomralioglu
                    <br />
                    Vyntrax – Webdesign &amp; Entwicklung
                    <br />
                    Hirschbergstraße 31
                    <br />
                    72336 Balingen
                    <br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Kontakt</h2>
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:info@vyntrax.de"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      info@vyntrax.de
                    </a>
                    <br />
                    Telefon:{" "}
                    <a
                      href="tel:+4915128013700"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      +49 151 280 13 700
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Umsatzsteuer</h2>
                  <p>
                    Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer erhoben
                    und daher auch nicht ausgewiesen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Streitschlichtung</h2>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="mt-4">
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                    teilzunehmen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Haftung für Inhalte</h2>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                    wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="mt-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                    den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                    Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Haftung für Links</h2>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                    Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                    Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="mt-4">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">Urheberrecht</h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                    Gebrauch gestattet.
                  </p>
                  <p className="mt-4">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                    Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                    werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

