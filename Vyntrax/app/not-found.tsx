import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="text-center px-4 max-w-lg">
          <div className="text-8xl md:text-9xl font-bold text-[#00CED1] mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-[#4a4a4a] dark:text-gray-300 mb-10 transition-colors duration-300">
            Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-full hover:bg-[#00A8AB] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
