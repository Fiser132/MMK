"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SYSTEMS = [
  {
    id: "poziarne",
    title: "Elektrická požiarna signalizácia",
    image: "/poziarny.png",
    content: [
      "Elektrická požiarna signalizácia (EPS) slúži na preventívnu ochranu objektov pred požiarom tak, že opticky a akusticky signalizuje vznik a miesto požiaru, samočinne alebo prostredníctvom ľudského činiteľa urýchľuje odovzdávanie informácie o požiari osobám určeným na vykonanie požiarneho zásahu, prípadne uvádza do činnosti zariadenia, ktoré bránia rozšíreniu požiaru, resp. priamo vykonávajú protipožiarny zásah.",
      "EPS má charakter pomocného zariadenia, ktoré je jedným z prostriedkov protipožiarneho istenia objektu.",
    ],
  },
  {
    id: "kamerove",
    title: "Kamerové systémy",
    image: "/camera.png",
    content: [
      "Umožňujú snímať, prenášať, zobrazovať a zaznamenávať obraz (príp. aj zvuk) zo sledovaného priestoru, monitorovať aktuálnu situáciu a poskytnúť vysvetlenia a dôkazy v prípade neočakávanej udalosti. Výpovednú hodnotu určuje kvalita a detailnosť obrazu.",
      "Preto je veľmi dôležité zvoliť také komponenty kamerového systému, ktoré zodpovedajú požiadavkám náročnosti aplikácie, veľkosti sledovaného objektu, spôsobu spracovania a prenosu signálu, odolnosti voči poveternostným podmienkam a pod.",
      "Všetky uvedené kritéria by potom mali jednoznačne určiť, či je na danú inštaláciu vhodná analógová alebo IP technológia, čiernobiele alebo farebné kamery s nočným videním, prisvietením, polohovaním a priblížením (tzv. PTZ systémy) alebo dome kamery, či je výhodnejší záznam videa do PC pomocou digitalizačných kariet alebo na harddisk digitálneho videorekordéra.",
      "S rastúcimi nárokmi na kvalitu obrazu prichádzajú od výrobcov stále nové technické riešenia, preto je inovácia v tomto segmente zabezpečenia objektov veľmi rýchla.",
      "Ku kamerovým systémom patria tiež video doplnky (prevodníky formátov obrazu, prepínače obrazu a kvadrátory, zosilňovače, napájacie zdroje) a inštalačný materiál (kryty na kamery, držiaky, kabeláž a pod.)",
    ],
  },
  {
    id: "pristupove",
    title: "Prístupové systémy",
    image: "/pristup.png",
    content: [
      "Prístupové systémy slúžia na riadenie prístupu osôb do objektov podľa prístupových práv. Identifikácia prebieha buď pomocou zadania kódu na kontaktnej klávesnici alebo kontaktnými či bezkontaktným identifikačnými médiami.",
      "Média majú rôzne prevedenie; môžu to byť kľúčenky s identifikačným čipom, proximitné karty, prívesky, náramky a pod. Špeciálnou skupinou prístupových systémov sú také, ktoré rozoznávajú užívateľov podľa vopred vloženého biometrického údaja (napr. odtlačku prsta).",
      "Srdcom prístupových systémov sú teda klávesnice alebo čítačky, ktoré sú schopné pracovať buď samostatne alebo v sieti. U inteligentných prístupových systémov umožňuje definovať prístupové práva riadiaci softvér.",
      "Dodatkovými funkciami prístupových systémov sú: záznam prístupov, prepojenie na zabezpečovaciu ústredňu, vytváranie užívateľských časových zón, zadávanie mien užívateľov, záloha a export údajov a pod.",
      "Do tejto skupiny produktov tiež patria audio a video vrátniky, ktoré umožňujú audiovizuálnu komunikáciu osoby, ktorá si vyžaduje prístup s osobou, ktorá ho má prideliť a systémy na kontrolu obchôdzky strážnikov.",
    ],
  },
];

export default function SystemPage() {
  const { system } = useParams();
  const router = useRouter();
  const data = SYSTEMS.find((s) => s.id === system);

  useEffect(() => {
    if (!data) {
      router.replace("/not-found"); // fallback if ID doesn't match
    }
  }, [data, router]);

  if (!data) return null;

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
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        {data.content.map((text, i) => (
          <p key={i} className="text-gray-300 leading-relaxed">
            {text}
          </p>
        ))}

        <Link
          href="/#bezpecnostne-systemy"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
          Naspäť na výber systémov
        </Link>
      </div>
    </section>
  );
}
