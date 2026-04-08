import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen (AGB) von Vyntrax.",
};

export default function AGBPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero title="Allgemeine Geschäftsbedingungen" />

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-[#4a4a4a] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">1. Geltungsbereich</h2>
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der
                    Vyntrax, erbracht durch Batuhan Yomralioglu, gegenüber dem Auftraggeber
                    (nachfolgend „Kunde"). Abweichende, entgegenstehende oder ergänzende AGB des
                    Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird
                    ausdrücklich schriftlich zugestimmt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">2. Vertragsgegenstand</h2>
                  <p>
                    Vertragsgegenstand sind die im jeweiligen Angebot oder Auftrag beschriebenen
                    Leistungen im Bereich Webdesign, Webentwicklung, SEO-Optimierung und Branding.
                    Art und Umfang der zu erbringenden Leistungen ergeben sich aus der jeweiligen
                    Leistungsbeschreibung bzw. dem individuellen Angebot.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">3. Vertragsschluss</h2>
                  <p>
                    Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers
                    oder durch den Beginn der Leistungserbringung zustande. Angebote des
                    Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich
                    als verbindlich gekennzeichnet sind.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">4. Leistungserbringung</h2>
                  <p>
                    Die Leistungen werden nach bestem Wissen und Gewissen sowie nach den aktuellen
                    technischen Standards erbracht. Der Auftragnehmer behält sich vor, die
                    Leistungen ganz oder teilweise durch qualifizierte Dritte erbringen zu lassen.
                  </p>
                  <p className="mt-4">
                    Der Kunde stellt dem Auftragnehmer alle für die Leistungserbringung erforderlichen
                    Unterlagen, Informationen und Zugänge rechtzeitig zur Verfügung. Verzögerungen,
                    die durch verspätete Zulieferung des Kunden entstehen, gehen nicht zu Lasten
                    des Auftragnehmers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">5. Preise und Zahlung</h2>
                  <p>
                    Alle Preise verstehen sich in Euro. Als Kleinunternehmer im Sinne von § 19
                    UStG wird keine Umsatzsteuer erhoben und somit auch nicht ausgewiesen (sofern
                    zutreffend – andernfalls zzgl. der gesetzlichen Mehrwertsteuer).
                  </p>
                  <p className="mt-4">
                    Die Zahlung erfolgt nach Rechnungsstellung innerhalb von 14 Tagen, sofern nicht
                    abweichend vereinbart. Bei größeren Projekten kann eine Anzahlung von bis zu 50%
                    der Auftragssumme vereinbart werden.
                  </p>
                  <p className="mt-4">
                    Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von
                    5 Prozentpunkten über dem Basiszinssatz zu berechnen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">6. Mitwirkungspflichten des Kunden</h2>
                  <p>
                    Der Kunde ist verpflichtet, dem Auftragnehmer die zur Durchführung des Auftrags
                    erforderlichen Informationen, Materialien und Zugangsdaten rechtzeitig und
                    vollständig zur Verfügung zu stellen. Entstehen dem Auftragnehmer durch
                    verspätete oder unvollständige Mitwirkung des Kunden Mehraufwand, kann dieser
                    gesondert in Rechnung gestellt werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">7. Urheberrecht und Nutzungsrechte</h2>
                  <p>
                    Mit vollständiger Zahlung der vereinbarten Vergütung erhält der Kunde das
                    einfache Nutzungsrecht an den erstellten Werken für den vereinbarten
                    Verwendungszweck. Das Urheberrecht verbleibt beim Auftragnehmer.
                  </p>
                  <p className="mt-4">
                    Der Auftragnehmer ist berechtigt, die im Rahmen des Auftrags erstellten Werke
                    zu Referenzzwecken in seinem Portfolio zu verwenden, sofern nicht ausdrücklich
                    schriftlich etwas anderes vereinbart wurde.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">8. Gewährleistung</h2>
                  <p>
                    Der Auftragnehmer gewährleistet, dass die Leistungen frei von wesentlichen
                    Mängeln erbracht werden. Gewährleistungsansprüche des Kunden bestehen nur bei
                    Verletzung wesentlicher Vertragspflichten. Die Gewährleistungsfrist beträgt
                    12 Monate ab Ablieferung bzw. Abnahme der Leistung.
                  </p>
                  <p className="mt-4">
                    Mängel müssen unverzüglich, spätestens innerhalb von 14 Tagen nach Entdeckung,
                    schriftlich angezeigt werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">9. Haftung</h2>
                  <p>
                    Der Auftragnehmer haftet nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung
                    für leichte Fahrlässigkeit ist ausgeschlossen, es sei denn, es handelt sich um
                    die Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). In diesem
                    Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
                  </p>
                  <p className="mt-4">
                    Die Haftung für Datenverlust wird auf den typischen Wiederherstellungsaufwand
                    beschränkt, der bei regelmäßiger und gefahrentsprechender Anfertigung von
                    Sicherungskopien eingetreten wäre.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">10. Vertraulichkeit und Datenschutz</h2>
                  <p>
                    Beide Parteien verpflichten sich, alle ihnen im Rahmen der Zusammenarbeit
                    bekannt gewordenen vertraulichen Informationen der jeweils anderen Partei
                    vertraulich zu behandeln und nicht an Dritte weiterzugeben.
                  </p>
                  <p className="mt-4">
                    Der Auftragnehmer verarbeitet personenbezogene Daten des Kunden ausschließlich
                    im Rahmen der geltenden Datenschutzgesetze, insbesondere der DSGVO. Weitere
                    Informationen entnehmen Sie unserer Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">11. Kündigung</h2>
                  <p>
                    Beide Parteien können den Vertrag aus wichtigem Grund fristlos kündigen. Ein
                    wichtiger Grund liegt insbesondere dann vor, wenn eine Partei wesentliche
                    Vertragspflichten trotz Mahnung und angemessener Fristsetzung nicht erfüllt.
                  </p>
                  <p className="mt-4">
                    Bei vorzeitiger Kündigung durch den Kunden sind die bis zum Zeitpunkt der
                    Kündigung erbrachten Leistungen zu vergüten.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">12. Schlussbestimmungen</h2>
                  <p>
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                    UN-Kaufrechts. Gerichtsstand ist, soweit gesetzlich zulässig, der
                    Geschäftssitz des Auftragnehmers.
                  </p>
                  <p className="mt-4">
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird
                    die Wirksamkeit der übrigen Bestimmungen dadurch nicht berührt. Die unwirksame
                    Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der
                    unwirksamen Bestimmung am nächsten kommt.
                  </p>
                  <p className="mt-4">
                    Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch
                    für die Aufhebung dieses Schriftformerfordernisses.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">13. Online-Streitbeilegung</h2>
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
                  <p className="text-sm text-[#6a6a6a] dark:text-gray-500 italic transition-colors duration-300">
                    Stand: März 2026
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
