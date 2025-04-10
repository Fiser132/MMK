import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BezpecnostneSystemy() {
  return (
    <section className="py-12 items-center flex flex-col bg-[#141414] justify-center w-full relative px-4" id="bezpecnostne-systemy">
              <div className="absolute -bottom-40 left-0 w-80 h-80 bg-indigo-900 rounded-full opacity-30 blur-3xl" />
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent inline-block">
          Bezpečnostné systémy
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Komplexné riešenia pre vašu bezpečnosť</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl">
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-900/5 transition-all hover:border-blue-700/30">
          <h3 className="text-xl font-semibold text-white mb-4">Elektrická požiarna signalizácia</h3>
          <p className="text-gray-400 mb-4">
            Elektrická požiarna signalizácia (EPS) slúži na preventívnu ochranu objektov pred požiarom tak, že opticky a
            akusticky signalizuje vznik a miesto požiaru.
          </p>
          <Link href="/bezpecnostne-systemy/poziarne" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
            Viac informácií <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-900/5 transition-all hover:border-blue-700/30">
          <h3 className="text-xl font-semibold text-white mb-4">Kamerové systémy</h3>
          <p className="text-gray-400 mb-4">
          Umožňujú snímať, prenášať, zobrazovať a zaznamenávať obraz (príp. aj zvuk) zo sledovaného priestoru, monitorovať aktuálnu situáciu a poskytnúť vysvetlenia a dôkazy v prípade neočakávanej udalosti.
          </p>
          <Link href="/bezpecnostne-systemy/kamerove" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
            Viac informácií <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-900/5 transition-all hover:border-blue-700/30">
          <h3 className="text-xl font-semibold text-white mb-4">Prístupové systémy</h3>
          <p className="text-gray-400 mb-4">
          Prístupové systémy slúžia na riadenie prístupu osôb do objektov podľa prístupových práv. Identifikácia prebieha buď pomocou zadania kódu na kontaktnej klávesnici alebo kontaktnými či bezkontaktným identifikačnými médiami.
          </p>
          <Link href="/bezpecnostne-systemy/pristupove" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
            Viac informácií <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
