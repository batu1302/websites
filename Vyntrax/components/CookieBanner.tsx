"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const pathname = usePathname();
  const isPrivacyPage = pathname === "/datenschutz" || pathname === "/datenschutz/";

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      setHasConsented(true);
    } else {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const acceptSelected = () => {
    saveConsent(consent);
  };

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setShowBanner(false);
    setShowDetails(false);
    setHasConsented(true);
  };

  const reopenBanner = () => {
    setShowBanner(true);
    setShowDetails(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <>
            {!isPrivacyPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
              />
            )}

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
            >
              <div className="max-w-4xl mx-auto bg-white dark:bg-[#111111] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-300">
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#00CED1]/10 flex-shrink-0">
                      <Cookie className="w-6 h-6 text-[#00CED1]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-2 transition-colors duration-300">
                        🍪 Wir verwenden Cookies
                      </h3>
                      <p className="text-[#4a4a4a] dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                        Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                        Einige Cookies sind technisch notwendig, während andere uns helfen, die Website zu 
                        verbessern und Ihnen personalisierte Inhalte anzuzeigen. Weitere Informationen finden 
                        Sie in unserer{" "}
                        <Link 
                          href="/datenschutz/" 
                          className="text-[#00CED1] hover:text-[#00A8AB] underline transition-colors"
                        >
                          Datenschutzerklärung
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 space-y-3">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-[#00CED1]" />
                            <div>
                              <p className="font-semibold text-[#1a1a1a] dark:text-white text-sm transition-colors duration-300">
                                Notwendige Cookies
                              </p>
                              <p className="text-xs text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
                                Erforderlich für die Grundfunktionen der Website (z.B. Theme-Einstellungen).
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={true}
                              disabled
                              className="w-5 h-5 accent-[#00CED1] cursor-not-allowed opacity-60"
                            />
                            <span className="text-xs text-[#6a6a6a] dark:text-gray-500 ml-2">Immer aktiv</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#00CED1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <div>
                              <p className="font-semibold text-[#1a1a1a] dark:text-white text-sm transition-colors duration-300">
                                Analyse-Cookies
                              </p>
                              <p className="text-xs text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
                                Helfen zu verstehen, wie Besucher die Website nutzen (z.B. Google Analytics).
                              </p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={consent.analytics}
                              onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00CED1]"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#00CED1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            <div>
                              <p className="font-semibold text-[#1a1a1a] dark:text-white text-sm transition-colors duration-300">
                                Marketing-Cookies
                              </p>
                              <p className="text-xs text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
                                Werden verwendet, um Besuchern relevante Werbung anzuzeigen.
                              </p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={consent.marketing}
                              onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00CED1]"></div>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-6 pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 bg-[#00CED1] text-white font-semibold rounded-xl hover:bg-[#00A8AB] transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                  >
                    Alle akzeptieren
                  </button>
                  
                  {showDetails ? (
                    <button
                      onClick={acceptSelected}
                      className="flex-1 px-6 py-3 bg-gray-100 dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-[#222222] transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm"
                    >
                      Auswahl speichern
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="flex-1 px-6 py-3 bg-gray-100 dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-[#222222] transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Einstellungen
                    </button>
                  )}
                  
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-6 py-3 text-[#6a6a6a] dark:text-gray-400 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-all duration-300 text-sm"
                  >
                    Nur notwendige
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!showBanner && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={reopenBanner}
          className="fixed bottom-4 left-4 z-[9997] p-3 rounded-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          aria-label="Cookie-Einstellungen öffnen"
          title="Cookie-Einstellungen"
        >
          <Cookie className="w-5 h-5 text-[#00CED1] group-hover:rotate-12 transition-transform duration-300" />
        </motion.button>
      )}
    </>
  );
}
