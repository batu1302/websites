import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Base URL - sollte in Production durch Umgebungsvariable ersetzt werden
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vyntrax.de";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vyntrax - Moderne Web-Lösungen",
    template: "%s | Vyntrax",
  },
  description:
    "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen. High-Performance Websites, die nicht nur beeindrucken, sondern messbare Ergebnisse liefern.",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Next.js",
    "React",
    "TypeScript",
    "Moderne Websites",
    "Digitale Lösungen",
    "Web-Agentur",
  ],
  authors: [{ name: "Vyntrax" }],
  creator: "Vyntrax",
  publisher: "Vyntrax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: baseUrl,
    siteName: "Vyntrax",
    title: "Vyntrax - Moderne Web-Lösungen",
    description:
      "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen. High-Performance Websites, die nicht nur beeindrucken, sondern messbare Ergebnisse liefern.",
  },
  twitter: {
    card: "summary",
    title: "Vyntrax - Moderne Web-Lösungen",
    description:
      "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen.",
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/vyntrax-v.png", sizes: "512x512" }],
  },
  verification: {
    // Google Search Console
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    // Bing Webmaster Tools
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    // Yandex verification code
  },
  category: "Web Development",
  classification: "Business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
  colorScheme: "dark light",
};

// JSON-LD Structured Data für bessere SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vyntrax",
  description:
    "Professionelles Webdesign und Webentwicklung für Ihr Unternehmen",
  url: baseUrl,
  logo: `${baseUrl}/favicon.svg`,
  sameAs: [
    // Social Media Links hier einfügen
    // "https://www.facebook.com/vyntrax",
    // "https://www.linkedin.com/company/vyntrax",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    // Telefon und E-Mail hier einfügen wenn verfügbar
  },
  areaServed: "DE",
  serviceType: "Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect zu wichtigen Domains für Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch für externe Ressourcen */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Analytics - Google Analytics 4 (kommentiert, aktivieren wenn benötigt) */}
        {/* {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )} */}
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            {/* Skip to main content link für Accessibility */}
            <a
              href="#main-content"
              className="absolute left-[-9999px] focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00CED1] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:ring-offset-2"
            >
              Zum Hauptinhalt springen
            </a>
            <ScrollToTop />
            {children}
            <CookieBanner />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
