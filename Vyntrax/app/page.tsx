import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import LaptopHero from "@/components/LaptopHero";
import SocialProof from "@/components/SocialProof";
import BentoGrid from "@/components/BentoGrid";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import FAQ from "@/components/FAQ";
import GlassCard from "@/components/GlassCard";
import MouseGlow from "@/components/MouseGlow";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleSystem from "@/components/ParticleSystem";
import MagneticButton from "@/components/MagneticButton";
import ParallaxSection from "@/components/ParallaxSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Luxury Effects */}
      <ParticleSystem />
      <MouseGlow />
      <SmoothScroll />
      <AnimatedBackground />
      
      <Navbar />
      
      <main id="main-content" className="pt-16 relative z-10">
        {/* Hero Section - 2 Spalten */}
        <Section variant="default" className="min-h-screen py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] flex items-center transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Links: Text & Buttons */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/30 text-[#00CED1] text-sm font-medium mb-4">
                ✨ Premium Web-Lösungen
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]">
                <span className="text-[#00CED1]">
                  Digitale Exzellenz
                </span>
                <br />
                <span className="text-[#1a1a1a] dark:text-white font-extralight transition-colors duration-300">
                  neu definiert
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#4a4a4a] dark:text-gray-300 leading-relaxed max-w-xl transition-colors duration-300">
                Wir entwickeln High-Performance Websites, die nicht nur beeindrucken, 
                sondern messbare Ergebnisse liefern.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton
                  href="#kontakt"
                  className="text-center"
                  magneticStrength={0.4}
                >
                  <span className="px-8 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-full hover:bg-[#00A8AB] transition-all duration-300 shadow-sm hover:shadow-md block">
                    Projekt starten
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="#expertise"
                  className="text-center"
                  magneticStrength={0.4}
                >
                  <span className="px-8 py-4 border-2 border-[#00CED1] text-[#00CED1] bg-white text-lg font-semibold rounded-full hover:bg-[#00CED1]/5 transition-all duration-300 block">
                    Expertise ansehen
                  </span>
                </MagneticButton>
              </div>

              {/* Mini Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">19+</div>
                  <div className="text-sm text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">Projekte</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">4 Jahre</div>
                  <div className="text-sm text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">Erfahrung</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1a1a1a] dark:text-white transition-colors duration-300">99%</div>
                  <div className="text-sm text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">Zufrieden</div>
                </div>
              </div>
            </div>

            {/* Rechts: 3D Visual Element */}
            <div className="block mt-12 lg:mt-0 h-[600px] lg:h-[800px]">
              <LaptopHero />
            </div>
          </div>
        </Section>

        {/* Social Proof - Logo Leiste */}
        <Section variant="default" className="py-0">
          <SocialProof />
        </Section>

        {/* Expertise - Bento Grid */}
        <Section id="expertise" variant="default" className="py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#111111] transition-colors duration-300">
          <ParallaxSection speed={0.3}>
            <div className="text-center mb-24 space-y-6 flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] dark:text-white transition-colors duration-300 flex items-center justify-center">
                <span className="text-move-effect group inline-flex flex-wrap items-center justify-center gap-x-2 leading-tight">
                  <span className="text-[#00CED1] group-hover:text-[#20E0E3] transition-colors duration-300">Lösungen</span>
                  <span className="whitespace-nowrap">, die </span>
                  <span className="inline-flex" aria-label="bewegen" role="text">
                    {'bewegen'.split('').map((char, i, arr) => (
                      <span
                        key={i}
                        className="letter-wave group-hover:text-[#20E0E3] transition-colors duration-300"
                        style={{ animationDelay: `${(arr.length - 1 - i) * 0.2}s` }}
                        aria-hidden="true"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-[#4a4a4a] dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Mit modernsten Technologien und bewährten Strategien bringen wir 
                Ihr Business auf das nächste Level.
              </p>
            </div>
          </ParallaxSection>
          
          <BentoGrid />
        </Section>

        {/* Kontaktformular */}
        <Section id="kontakt" variant="default" className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <ParallaxSection speed={0.2}>
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] dark:text-white transition-colors duration-300">
                Lassen Sie uns <span className="text-[#00CED1]">sprechen</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-[#4a4a4a] dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                Erzählen Sie mir von Ihrem Projekt. Ich melde mich innerhalb von 24 Stunden.
              </p>
            </div>
          </ParallaxSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Links: Kontaktformular */}
            <GlassCard className="p-8 md:p-12">
              <ContactForm />
            </GlassCard>

            {/* Rechts: Kontaktkarte */}
            <ContactCard />
          </div>
        </Section>

        {/* Testimonials - Dark Mode */}
        <Section id="testimonials" variant="default" className="py-32 bg-[#0a0a0a]">
          <ParallaxSection speed={0.2}>
            <div className="text-center mb-16 space-y-6 px-4">
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white">
                Das sagen unsere <span className="text-[#00CED1]">Kunden</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-400 max-w-2xl mx-auto">
                Echte Ergebnisse für echte Unternehmen. Überzeugen Sie sich selbst.
              </p>
            </div>
          </ParallaxSection>
          
          <Testimonials />
        </Section>

        {/* Call-to-Action */}
        <Section id="cta" variant="default" className="py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#111111] transition-colors duration-300">
          <CTASection />
        </Section>

        {/* FAQ */}
        <Section id="faq" variant="default" className="py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <ParallaxSection speed={0.2}>
              <div className="text-center mb-24 space-y-6">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] dark:text-white transition-colors duration-300">
                  <span className="text-[#00CED1]">Häufige</span> Fragen
                </h2>
                <p className="text-xl md:text-2xl font-light text-[#4a4a4a] dark:text-gray-300 transition-colors duration-300">
                  Alles, was Sie über unsere Arbeitsweise wissen müssen.
                </p>
              </div>
            </ParallaxSection>
            
            <FAQ />
          </div>
        </Section>

      </main>
      
      <Footer />
    </div>
  );
}
