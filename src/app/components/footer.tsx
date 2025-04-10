import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="px-4 py-12 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              M.M.K s.r.o
            </h3>
            <p className="text-gray-400">
              Profesionálne bezpečnostné systémy pre váš domov a podnikanie
            </p>
            <div className="flex items-center space-x-2 group">
              <a
                href="tel:+421911437275"
                className="hover:text-blue-300 transition-colors"
              >
                +421 911 437 275
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <a
                href="tel:+421905437275"
                className="hover:text-blue-300 transition-colors"
              >
                +421 905 437 275
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <a
                href="mailto:mmk@mmk.sk"
                className="hover:text-blue-300 transition-colors"
              >
                mmk@mmk.sk
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Navigácia</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#bezpecnostne-systemy"
                  className="group flex items-center transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="hover:text-blue-300 transition-colors">
                    Systémy
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#uctovnictvo"
                  className="group flex items-center transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="hover:text-blue-300 transition-colors">
                    Účtovníctvo
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontakt"
                  className="group flex items-center transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="hover:text-blue-300 transition-colors">
                    Kontakt
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Adresa</h3>
            <p className="text-gray-400">
              M.M.K., s.r.o.
              <br />
              Kriková 10
              <br />
              821 07 Bratislava
              <br />
              Slovenská republika
            </p>
            <p className="text-gray-400">
              IČO: 44 158 785
              <br />
              IČDPH: SK2023104600
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-start lg:justify-end">
            <Link href="/" className="block relative h-32 w-full max-w-[180px]">
              <Image
                src="/mmkLogo.png"
                alt="M.M.K. Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 180px"
                priority
              />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} | M.M.K.SK | M.M.K s.r.o. Všetky práva
            vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}
