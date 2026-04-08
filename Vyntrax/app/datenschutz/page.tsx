import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Vyntrax gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero title="Datenschutzerklärung" />

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-[#4a4a4a] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">1. Datenschutz auf einen Blick</h2>
                  
                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                    diesem Text aufgeführten Datenschutzerklärung.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Datenerfassung auf dieser Website</h3>
                  <p>
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                    <br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                    Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
                    Datenschutzerklärung entnehmen.
                  </p>
                  <p className="mt-4">
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                    <br />
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                    es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten
                    werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                    IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                    Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                  <p className="mt-4">
                    <strong>Wofür nutzen wir Ihre Daten?</strong>
                    <br />
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                    gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  <p className="mt-4">
                    <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                    <br />
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                    Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                    Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                    Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die
                    Zukunft widerrufen. Sie haben das Recht, unter bestimmten Umständen die Einschränkung
                    der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                    ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">2. Hosting</h2>
                  <p>
                    Diese Website wird gehostet von:
                    <br /><br />
                    <strong>STRATO AG</strong>
                    <br />
                    Pascalstraße 10
                    <br />
                    10587 Berlin
                    <br />
                    Deutschland
                  </p>
                  <p className="mt-4">
                    Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                    Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                    Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                    Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
                    handeln.
                  </p>
                  <p className="mt-4">
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                    potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                    einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
                    durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="mt-4">
                    Weitere Informationen finden Sie in der Datenschutzerklärung von STRATO:{" "}
                    <a
                      href="https://www.strato.de/datenschutz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      https://www.strato.de/datenschutz/
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  
                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="mt-4">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
                    Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser
                    Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Hinweis zur verantwortlichen Stelle</h3>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    <br /><br />
                    Batuhan Yomralioglu
                    <br />
                    Vyntrax – Webdesign & Entwicklung
                    <br />
                    Balingen
                    <br />
                    Deutschland
                    <br /><br />
                    E-Mail:{" "}
                    <a href="mailto:info@vyntrax.de" className="text-[#00CED1] hover:text-[#00A8AB] transition-colors">
                      info@vyntrax.de
                    </a>
                    <br />
                    Telefon:{" "}
                    <a href="tel:+4915128013700" className="text-[#00CED1] hover:text-[#00A8AB] transition-colors">
                      +49 151 280 13 700
                    </a>
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p>
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                    möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                    Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                    Widerruf unberührt.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p>
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
                    bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres
                    gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                    Verstoßes. Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Recht auf Datenübertragbarkeit</h3>
                  <p>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                    Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
                    in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Auskunft, Löschung und Berichtigung</h3>
                  <p>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
                    auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                    Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                    Berichtigung oder Löschung dieser Daten.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">4. Cookies</h2>
                  <p>
                    Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien,
                    die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers
                    gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem
                    Betriebssystem des Nutzers gespeichert werden.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Technisch notwendige Cookies</h3>
                  <p>
                    Wir verwenden technisch notwendige Cookies, die für den Betrieb der Website
                    erforderlich sind. Dazu gehören:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Theme-Einstellung</strong> (Dark/Light Mode) – gespeichert im Local Storage</li>
                    <li><strong>Cookie-Einwilligung</strong> – speichert Ihre Cookie-Präferenzen im Local Storage</li>
                  </ul>
                  <p className="mt-4">
                    Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt.
                    Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung technisch
                    notwendiger Cookies zur technisch fehlerfreien und optimierten Bereitstellung
                    seiner Dienste.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Cookie-Einwilligung</h3>
                  <p>
                    Beim Besuch unserer Website werden Sie über die Verwendung von Cookies informiert
                    und um Ihre Einwilligung gebeten. Sie können Ihre Cookie-Einstellungen jederzeit
                    ändern, indem Sie Ihre Browserdaten löschen. Nicht notwendige Cookies werden erst
                    nach Ihrer ausdrücklichen Einwilligung gesetzt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">5. Kontaktformular</h2>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                    dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="mt-4">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                    Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                    beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                    Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="mt-4">
                    Für die Übermittlung der Kontaktformular-Daten nutzen wir den Dienst Formspree
                    (Formspree, Inc., USA). Formspree verarbeitet die von Ihnen eingegebenen Daten
                    ausschließlich zum Zwecke der Weiterleitung Ihrer Nachricht an uns. Weitere
                    Informationen finden Sie in der Datenschutzerklärung von Formspree unter:{" "}
                    <a
                      href="https://formspree.io/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      https://formspree.io/legal/privacy-policy
                    </a>.
                  </p>
                  <p className="mt-4">
                    <strong>Hinweis zur Datenübermittlung in die USA:</strong> Formspree, Inc. hat
                    seinen Sitz in den USA. Die Datenübermittlung in die USA erfolgt auf Grundlage
                    des EU-US Data Privacy Framework (DPF). Soweit kein angemessenes
                    Datenschutzniveau besteht, basiert die Übermittlung auf
                    EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
                  </p>
                  <p className="mt-4">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                    zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
                    Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
                    insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">6. Externe Dienste</h2>
                  
                  <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-white mb-3 mt-6 transition-colors duration-300">Google Fonts (lokal eingebunden)</h3>
                  <p>
                    Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte
                    Google Fonts. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern
                    von Google findet dabei nicht statt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">7. Ihre Rechte</h2>
                  <p>
                    Sie haben jederzeit das Recht auf:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Widerspruch gegen die Verarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                  </ul>
                  <p className="mt-4">
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
                    uns wenden.
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
