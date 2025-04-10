"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const SYSTEMS = [
  {
    id: "poziarne",
    title: "Elektrická požiarna signalizácia",
    image: "/poziarny.png",
    content: [
      "Elektrická požiarna signalizácia (EPS) slúži na preventívnu ochranu objektov pred požiarom tak, že opticky a akusticky signalizuje vznik a miesto požiaru.",
      "EPS má charakter pomocného zariadenia, ktoré je jedným z prostriedkov protipožiarneho istenia objektu.",
    ],
  },
  {
    id: "kamerove",
    title: "Kamerové systémy",
    image: "/camera.png",
    content: [
      "Umožňujú snímať, prenášať, zobrazovať a zaznamenávať obraz (príp. aj zvuk) zo sledovaného priestoru.",
      "Ku kamerovým systémom patria aj doplnky, ako prevodníky, kvadrátory a kabeláž.",
    ],
  },
  {
    id: "pristupove",
    title: "Prístupové systémy",
    image: "/pristup.png",
    content: [
      "Prístupové systémy slúžia na riadenie prístupu osôb do objektov podľa prístupových práv.",
      "Identifikácia môže prebiehať pomocou PIN kódu, čipovej karty alebo biometrie.",
    ],
  },
]

export default function SystemPage() {
  const { system } = useParams()
  const router = useRouter()

  const data = SYSTEMS.find((s) => s.id === system)

  useEffect(() => {
    if (!data) {
      router.replace("/not-found") // Optional custom 404 route
    }
  }, [data, router])

  if (!data) return null

  return (
    <section className="min-h-screen bg-[#141414] text-white">
      <div className="relative h-[50vh] w-full">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        {data.content.map((text, i) => (
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
