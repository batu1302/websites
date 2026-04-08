"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const footerSections = {
    about: {
      title: "Über uns",
      links: [
        { label: "Unser Team", href: "/team" },
        { label: "Karriere", href: "/karriere" },
        { label: "Referenzen", href: "/referenzen" },
      ],
    },
    services: {
      title: "Leistungen",
      links: [
        { label: "Webdesign", href: "/services/webdesign" },
        { label: "Webentwicklung", href: "/services/entwicklung" },
        { label: "SEO Optimierung", href: "/services/seo" },
        { label: "Branding", href: "/services/branding" },
      ],
    },
    legal: {
      title: "Rechtliches",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
      ],
    },
  };

  const contactInfo = [
    { icon: Mail, label: "info@vyntrax.de", href: "mailto:info@vyntrax.de" },
    { icon: Phone, label: "+49 151 280 13 700", href: "tel:+4915128013700" },
    { icon: MapPin, label: "Balingen, Baden-Württemberg, Deutschland" },
  ];

  const socialLinks: { icon: React.ElementType; href: string; label: string }[] = [];

  return (
    <footer className="bg-gray-50 dark:bg-black text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section */}
        <div className="mb-12 pb-8 border-b border-gray-200 dark:border-[#1a1a1a]">
          <Link href="/">
            <Logo variant="footer" animated={false} />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {footerSections.about.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.about.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#00CED1] dark:hover:text-[#00CED1] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {footerSections.services.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#00CED1] dark:hover:text-[#00CED1] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {footerSections.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#00CED1] dark:hover:text-[#00CED1] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">Kontakt</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center space-x-3 hover:text-[#00CED1] dark:hover:text-[#00CED1] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                    <span>{info.label}</span>
                  </div>
                );

                return (
                  <li key={index}>
                    {info.href ? (
                      <a href={info.href}>{content}</a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-[#1a1a1a] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                © {new Date().getFullYear()} Batuhan Yomralioglu | Web-Exzellenz
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Link 
                  href="/impressum" 
                  className="text-gray-500 dark:text-gray-500 hover:text-[#00CED1] transition-colors"
                >
                  Impressum
                </Link>
                <span className="text-gray-300 dark:text-gray-800">•</span>
                <Link 
                  href="/datenschutz" 
                  className="text-gray-500 dark:text-gray-500 hover:text-[#00CED1] transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>

            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 rounded-full bg-gray-200 dark:bg-[#1a1a1a] hover:bg-[#00CED1] dark:hover:bg-[#00CED1] text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

