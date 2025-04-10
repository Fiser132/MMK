import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const SYSTEMS = {
  poziarne: {
    title: "Elektrická požiarna signalizácia",
    image: "/poziarny.png",
    content: [
      "Elektrická požiarna signalizácia (EPS) slúži na preventívnu ochranu objektov pred požiarom tak, že opticky a akusticky signalizuje vznik a miesto požiaru, samočinne alebo prostredníctvom ľudského činiteľa urýchľuje odovzdávanie informácie o požiari osobám určeným na vykonanie požiarneho zásahu, prípadne uvádza do činnosti zariadenia, ktoré bránia rozšíreniu požiaru, resp. priamo vykonávajú protipožiarny zásah.",
      "EPS má charakter pomocného zariadenia, ktoré je jedným z prostriedkov protipožiarneho istenia objektu.",
    ],
  },
  kamerove: {
    title: "Kamerové systémy",
    image: "/camera.png",
    content: [
      "Umožňujú snímať, prenášať, zobrazovať a zaznamenávať obraz (príp. aj zvuk) zo sledovaného priestoru, monitorovať aktuálnu situáciu a poskytnúť vysvetlenia a dôkazy v prípade neočakávanej udalosti.",
      "Preto je veľmi dôležité zvoliť také komponenty kamerového systému, ktoré zodpovedajú požiadavkám náročnosti aplikácie...",
    ],
  },
  pristupove: {
    title: "Prístupové systémy",
    image: "/pristup.png",
    content: [
      "Prístupové systémy slúžia na riadenie prístupu osôb do objektov podľa prístupových práv...",
      "Média majú rôzne prevedenie...",
      "Srdcom prístupových systémov sú teda klávesnice alebo čítačky...",
    ],
  },
}

type SystemKey = keyof typeof SYSTEMS

type PageProps = {
  params: {
    system: string
  }
}

export default function SystemPage({ params }: PageProps) {
  const systemKey = params.system as SystemKey
  const data = SYSTEMS[systemKey]

  if (!data) return notFound()

  return (
    <section className="min-h-screen bg-[#141414] text-white">
      <div className="relative h-[50vh] w-full">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl flex flex-col gap-10 mx-auto px-4 py-12">
        <div className="space-y-6 text-gray-300">
          {data.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <Link
          href="/#bezpecnostne-systemy"
          className="text-blue-400 hover:text-blue-300 inline-flex items-center mb-8"
        >
          <ArrowLeft className="mr-1" size={16} />
          Naspäť na výber systémov
        </Link>
      </div>
    </section>
  )
}
