import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const SYSTEMS = [
  {
    id: "poziarne",
    title: "Elektrická požiarna signalizácia",
    image: "/poziarny.png",
    content: [
      "Elektrická požiarna signalizácia (EPS) slúži na preventívnu ochranu objektov pred požiarom tak, že opticky a akusticky signalizuje vznik a miesto požiaru...",
      "EPS má charakter pomocného zariadenia, ktoré je jedným z prostriedkov protipožiarneho istenia objektu.",
    ],
  },
  {
    id: "kamerove",
    title: "Kamerové systémy",
    image: "/camera.png",
    content: [
      "Umožňujú snímať, prenášať, zobrazovať a zaznamenávať obraz (príp. aj zvuk) zo sledovaného priestoru...",
      "Všetky uvedené kritéria by potom mali jednoznačne určiť, či je vhodná analógová alebo IP technológia...",
      "Ku kamerovým systémom patria tiež video doplnky, prepínače a inštalačný materiál.",
    ],
  },
  {
    id: "pristupove",
    title: "Prístupové systémy",
    image: "/pristup.png",
    content: [
      "Prístupové systémy slúžia na riadenie prístupu osôb do objektov podľa prístupových práv...",
      "Média môžu byť čipové kľúčenky, karty, biometrické dáta a pod.",
      "Záznam prístupov, prepojenie s ústredňou, časové zóny a ďalšie pokročilé funkcie.",
    ],
  },
]

export default function SystemPage({ params }: { params: { system: string } }) {
  const system = SYSTEMS.find((s) => s.id === params.system)

  if (!system) return notFound()

  return (
    <section className="min-h-screen bg-[#141414] text-white">
      {/* Top image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={system.image}
          alt={system.title}
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
            {system.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        {system.content.map((text, i) => (
          <p key={i} className="text-gray-300">{text}</p>
        ))}

        <Link
          href="/#bezpecnostne-systemy"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-8"
        >
          <ArrowLeft className="mr-2" size={16} />
          Naspäť na výber systémov
        </Link>
      </div>
    </section>
  )
}
