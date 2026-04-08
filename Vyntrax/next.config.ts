import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // STATISCHER EXPORT – Generiert reines HTML/CSS/JS im /out Ordner
  // Kann auf jedem Webhosting gehostet werden (Strato, IONOS, Netcup, Hetzner Storage etc.)
  // Kein Node.js Server nötig – einfach den /out Ordner per FTP hochladen!
  // output: "export", // Auskommentiert, damit /api/send (Server-Side) funktioniert!

  // Schönere URLs: /impressum/ statt /impressum.html
  trailingSlash: true,

  // Bilder-Optimierung deaktiviert (für statisches Hosting nötig)
  images: {
    unoptimized: true,
  },

  // Komprimierung & Sicherheit
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
